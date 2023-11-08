const { Util, MessageEmbed } = require("discord.js");
const ytdl = require("ytdl-core");
const yts = require("yt-search");
const ytdlDiscord = require("discord-ytdl-core");
var ytpl = require("ytpl");
const sendError = require("../../util/error");
const fs = require("fs");
const scdl = require("soundcloud-downloader").default;
const Discord = require("discord.js");

module.exports = {
        nombre: "playlist",
        alias: ["pl"],

    run: async (client, message, args) => {
        
        const channel = message.member.voice.channel;
        if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);

        const url = args[0] ? args[0].replace(/<(.+)>/g, "$1") : "";

        var searchString = args.join(" ");

        const permissions = channel.permissionsFor(message.client.user);
        if (!permissions.has("CONNECT")) return sendError(`${client.lang.botnopermissions}`, message.channel);
        if (!permissions.has("SPEAK")) return sendError(`${client.lang.botnopermissions}`, message.channel);

        if (!searchString || !url) return sendError(`${client.lang.playlist_notprovidelink}`, message.channel);
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            try {
                const playlist = await ytpl(url.split("list=")[1]);
                if (!playlist) return sendError(`${messagejson.playlistnotfound}`, message.channel);
                const videos = await playlist.items;
                for (const video of videos) {

                    await handleVideo(video, message, channel, true); 
                }
                return message.channel.send({
                    embed: {
                        color: "GREEN",
                        description: `${client.lang.playlist_added}`,
                    },
                });
            } catch (error) {
                console.error(error);
                return sendError(`${client.lang.playlist_notfound}`, message.channel).catch(console.error);
            }
        } else {
            try {
                var searched = await yts.search(searchString);

                if (searched.playlists.length === 0) return sendError(`${client.lang.playlist_notfound}`, message.channel);
                var songInfo = searched.playlists[0];
                let listurl = songInfo.listId;
                const playlist = await ytpl(listurl);
                const videos = await playlist.items;
                for (const video of videos) {
                    await handleVideo(video, message, channel, true);
                }
                let thing = new MessageEmbed()
                    .setColor("RANDOM")
                    .setDescription(`${client.lang.playlist_added}`);
                return message.channel.send(thing);
            } catch (error) {
                return sendError(`${client.lang.error}\n \`${error}\``, message.channel).catch(console.error);
            }
        }

        async function handleVideo(video, message, channel, playlist = false) {
            const serverQueue = message.client.queue.get(message.guild.id);
            const song = {
                id: video.id,
                title: Util.escapeMarkdown(video.title),
                views: video.views ? video.views : "-",
                ago: video.ago ? video.ago : "-",
                duration: video.duration,
                url: `https://www.youtube.com/watch?v=${video.id}`,
                img: video.thumbnail,
                req: message.author,
            };
            if (!serverQueue) {
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

                try {
                    var connection = await channel.join();
                    queueConstruct.connection = connection;
                    play(message.guild, queueConstruct.songs[0]);
                } catch (error) {
                    console.error(`[ERROR]\n${error}`);
                    message.client.queue.delete(message.guild.id);
                    return sendError(`${client.lang.error} \n \`${error}\``, message.channel);
                }
            } else {
                serverQueue.songs.push(song);
                if (playlist) return;
                let thing = new MessageEmbed()
                    .setAuthor(`${client.lang.playlist_addedtitle}`, "https://raw.githubusercontent.com/Dats360/wumpusgamer/main/49839290420984902839049238423.gif")
                    .setThumbnail(song.img)
                    .setColor("RANDOM")
                    .addField(`${client.lang.playlist_name}`, song.title, true)
                    .addField(`${client.lang.playlist_duration}`, song.duration, true)
                    .addField(`${client.lang.playlist_reqby}`, song.req, true)
                return message.channel.send(thing);
            } //¿?¿?¿?
            return;
        }

        async function play(guild, song) {
            const serverQueue = message.client.queue.get(message.guild.id);
            if (!song) {
                sendError(`${client.lang.songsend}`, message.channel);
                message.guild.me.voice.channel.leave(); 
                //Para hacerlo 24/7 Remover está línea, es para que no se salga del canal de voz cunado se acaben las cancione.
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
                            if (serverQueue) {
                                serverQueue.songs.shift();
                                play(guild, serverQueue.songs[0]);
                                return sendError(`${client.lang.error} \n \`${er}\``, message.channel);
                            }
                        }
                    });
                }
            } catch (error) {
                if (serverQueue) {
                    console.log(error);
                    serverQueue.songs.shift();
                    play(guild, serverQueue.songs[0]);
                }
            }
            serverQueue.connection.on("disconnect", () => message.client.queue.delete(message.guild.id));
            const dispatcher = serverQueue.connection.play(stream, { type: streamType }).on("finish", () => {
                const shiffed = serverQueue.songs.shift();
                if (serverQueue.loop === true) {
                    serverQueue.songs.push(shiffed);
                }
                play(guild, serverQueue.songs[0]);
            });

            dispatcher.setVolume(serverQueue.volume / 100);
            let thing = new MessageEmbed()
                .setAuthor(`${client.lang.playlist_nowplayingq}`, "https://raw.githubusercontent.com/Dats360/wumpusgamer/main/49839290420984902839049238423.gif")
                .setThumbnail(song.img)
                .setColor("RANDOM")
                .addField(`${client.lang.name}`, song.title, true)
                .addField(`${client.lang.duration}`, song.duration, true)
                .addField(`${client.lang.reqby}`, song.req, true)
serverQueue.textChannel.send(thing);
        }
    },
};
