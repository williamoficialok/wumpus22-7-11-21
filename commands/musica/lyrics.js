const { MessageEmbed } = require("discord.js");
const lyricsFinder = require("lyrics-finder");
const sendError = require("../../util/error");
const splitlyrics = require("../../util/pagination");
const Discord = require("discord.js"); 

module.exports = {
        nombre: "lyrics",
        alias: ["ly", "letra", "lyric"],

    run: async (client, message, args) => {

        let channel = message.member.voice.channel;
    const notvc = new Discord.MessageEmbed()
    .setDescription(`${client.lang.membernovoicechannel}`)
    .setColor("RED")
        if (!channel) return message.channel.send(notvc);

        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return sendError(`${client.lang.nosongsplaying}`, message.channel).catch(console.error);

        let lyrics = null;

        try {
            lyrics = await lyricsFinder(queue.songs[0].title, "");
            if (!lyrics) lyrics = `${client.lang.lyrics_notfound}`;
        } catch (error) {
            lyrics = `${client.lang.lyrics_notfound}`;
        }
        const splittedLyrics = splitlyrics.chunk(lyrics, 1024);

        let lyricsEmbed = new MessageEmbed()
            .setAuthor(`${client.lang.lyrics_ly} ${queue.songs[0].title}`, "https://raw.githubusercontent.com/Dats360/wumpusgamer/main/49839290420984902839049238423.gif")
            .setThumbnail(queue.songs[0].img)
            .setColor("RANDOM")
            .setDescription(splittedLyrics[0])
            .setFooter(`${client.lang.lyrics_page} 1 ${client.lang.lyrics_of} ${splittedLyrics.length}.`)

        const lyricsMsg = await message.channel.send(lyricsEmbed);
        if (splittedLyrics.length > 1) await splitlyrics.pagination(lyricsMsg, message.author, splittedLyrics);
    },
};
