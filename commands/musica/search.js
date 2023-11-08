const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search").default;
const ytdlDiscord = require("discord-ytdl-core");
const YouTube = require("youtube-sr").default;
const sendError = require("../../util/error");
const fs = require("fs");
const scdl = require("soundcloud-downloader").default;

module.exports = { 
        nombre: "search",
        alias: ["sc", "src"],

    run: async (client, message, args) => {
        let channel = message.member.voice.channel;
        if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return sendError(`${client.lang.botnopermissions}`, message.channel);
        if (!permissions.has("SPEAK")) return sendError(`${client.lang.botnopermissions}`, message.channel);

        var searchString = args.join(" ");
        if (!searchString) return sendError(`${client.lang.search_noprovidesrc}`, message.channel);

        var serverQueue = message.client.queue.get(message.guild.id);
        try {
            var searched = await YouTube.search(searchString, { limit: 10 });
            if (searched[0] == undefined) return sendError(`${client.lang.search_notfound}`, message.channel);
            let index = 0;
            let embedPlay = new MessageEmbed()
                .setColor("RANDOM")
                .setAuthor(`${client.lang.search_results} \"${args.join(" ")}\"`, message.author.displayAvatarURL())
                .setDescription(`${searched.map((video2) => `**\`${++index}\` ** | [\`${video2.title}\`](${video2.url}) - \`${video2.durationFormatted}\``).join("\n")}`)
                .setFooter(`${client.lang.search_typeto}`);
            message.channel.send(embedPlay).then((m) =>
                m.delete({
                    timeout: 30000,
                })
            );
            try {
                var response = await message.channel.awaitMessages((message2) => message2.content > 0 && message2.content < 11, {
                    max: 1,
                    time: 30000,
                    errors: ["time"],
                });
            } catch (err) {
                return message.channel.send({
                    embed: {
                        color: "RED",
                        description: `${client.lang.search_ratelimit}`,
                    },
                });
            }
            const videoIndex = parseInt(response.first().content);
            var video = await searched[videoIndex - 1];
        } catch (err) {
            console.error(err);
            return message.channel.send({
                embed: {
                    color: "RED",
                    description: `${client.lang.error}\n${err}`,
                },
            });
        }

        response.delete();
        var songInfo = video;

        const song = {
            id: songInfo.id,
            title: Util.escapeMarkdown(songInfo.title),
            views: String(songInfo.views).padStart(10, " "),
            ago: songInfo.uploadedAt,
            duration: songInfo.durationFormatted,
            url: `https://www.youtube.com/watch?v=${songInfo.id}`,
            img: songInfo.thumbnail.url,
            req: message.author,
        };

        if (serverQueue) {
            serverQueue.songs.push(song);
            let thing = new MessageEmbed()
                .setAuthor(`${client.lang.search_added}`, "https://raw.githubusercontent.com/Dats360/wumpusgamer/main/49839290420984902839049238423.gif")
                .setThumbnail(song.img)
                .setColor("RANDOM")
                .addField(`${client.lang.search_name}`, song.title, true)
                .addField(`${client.lang.search_duration}`, song.duration, true)
                .addField(`${client.lang.search_reqby}`, song.req, true)
            return message.channel.send(thing);
        }

        const queueConstruct = {
            textChannel: message.channel,
            voiceChannel: channel,
            connection: null,
            songs: [],
            volume: 80,
            playing: true,
            loop: false,
        };
        message.client.queue.set(message.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

        const play = async (song) => {
            const queue = message.client.queue.get(message.guild.id);
            if (!song) {
                sendError(`${client.lang.songsend}`, message.channel);
                message.guild.me.voice.channel.leave(); //Para hacerlo 24/7  remuevan está línea, Hace que salga del canal de voz cunado se terminen las canciones 
                message.client.queue.delete(message.guild.id);
                return;
            }
            let stream;
            let streamType;

            try {
                if (song.url.includes("soundcloud.com")) {
                    try {
                        stream = await scdl.downloadFormat(song.url, scdl.FORMATS.OPUS, client.config.SOUNDCLOUD);
                    } catch (error) {
                        stream = await scdl.downloadFormat(song.url, scdl.FORMATS.MP3, client.config.SOUNDCLOUD);
                        streamType = "unknown";
                    }
                } else if (song.url.includes("youtube.com")) {
                    stream = await ytdlDiscord(song.url, { filter: "audioonly", quality: "highestaudio", highWaterMark: 1 << 25, opusEncoded: true });
                    streamType = "opus";
                    stream.on("error", function (er) {
                        if (er) {
                            if (queue) {
                                queue.songs.shift();
                                play(queue.songs[0]);
                                return sendError(`${client.lang.error}\nError \`${er}\``, message.channel);
                            }
                        }
                    });
                }
            } catch (error) {
                if (queue) {
                    queue.songs.shift();
                    play(queue.songs[0]);
                }

                console.error(error);
                return message.channel.send("err");
            }

            queue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
            const dispatcher = queue.connection.play(stream, { type: streamType }).on("finish", () => {
                const shiffed = queue.songs.shift();
                if (queue.loop === true) {
                    queue.songs.push(shiffed);
                }
                play(queue.songs[0]);
            });

            dispatcher.setVolumeLogarithmic(queue.volume / 100);
            let thing = new MessageEmbed()
                .setAuthor(`${client.lang.search_nowplaying}`, "https://raw.githubusercontent.com/Dats360/wumpusgamer/main/49839290420984902839049238423.gif")
                .setThumbnail(song.img)
                .setColor("RANDOM")
                .addField(`${client.lang.search_name}`, song.title, true)
                .addField(`${client.lang.search_duration}`, song.duration, true)
                .addField(`${client.lang.search_reqby}`, song.req, true)
            queue.textChannel.send(thing);
        };

        try {
            const connection = await channel.join();
            queueConstruct.connection = connection;
            channel.guild.voice.setSelfDeaf(true);
            play(queueConstruct.songs[0]);
        } catch (error) {
            console.error(`${client.lang.error}\n${error}`);
            message.client.queue.delete(message.guild.id);
            await channel.leave();
            return sendError(`${client.lang.error}\n ${error}`, message.channel);
        }
    },
};
