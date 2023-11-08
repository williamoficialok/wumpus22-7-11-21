const { MessageEmbed } = require("discord.js");
const util = require("../../util/pagination");
const Discord = require("discord.js")
const sendError = require("../../util/error");

module.exports = {
        nombre: "queue",
        alias: ["q", "list", "songlist", "song-list", "lista", "listacanciones"],
    run: async (client, message, args) => {

        const channel = message.member.voice.channel;
        if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);
  

        const queue = message.client.queue.get(message.guild.id);
        if (!queue) return sendError(`${client.lang.nosongsplaying}`, message.channel);

        //const queque2 = queue.songs.map((y, i) => c. `\`${t.title} - <@${t.req.id}>`);
        const que = queue.songs.map((t, i) => `\`${++i}\` | \`${t.title}\` - <@${t.req.id}>`);
        const chunked = util.chunk(que, 10).map((x) => x.join("\n"));

        const embed = new MessageEmbed()
            .setAuthor(`${client.lang.queue_title}`)
            .setThumbnail("https://raw.githubusercontent.com/Dats360/wumpusgamer/main/wb_dj.gif")
            .setColor("RANDOM")
            .setDescription(chunked[0])
            .addField(`${client.lang.queue_np}`, `[${queue.songs[0].title}](${queue.songs[0].url})`, true)
            .addField(`${client.lang.queue_vc}`, queue.voiceChannel, true)
            .setFooter(`${client.lang.queue_page} ${chunked.length}.`);
        if (queue.songs.length === 1) embed.setDescription(`${client.lang.noqueue}`);

        try {
            const queueMsg = await message.channel.send(embed);
            if (chunked.length > 1) await util.pagination(queueMsg, message.author, chunked);
        } catch (e) {
            msg.channel.send(`${client.lang.error} \n \`${e.message}\``);
        }
    },
};
