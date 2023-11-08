const { MessageEmbed } = require("discord.js");
const sendError = require("../../util/error")
const Discord = require("discord.js");
const bar = require("string-progressbar")
module.exports = {
    nombre: "nowplaying",
    alias: ["np"],
  run: async (client, message, args) => {

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError(`${client.lang.nosongsplaying}`, message.channel);
    let song = serverQueue.songs[0]
    var total = 10;
    var current = 4;

    let thing = new MessageEmbed()
      .setThumbnail(song.img)
      .setColor("RANDOM")
      .setDescription(`
**${client.lang.np_title}** ${song.title}
**${client.lang.np_reqby}** ${song.req.tag}
**${client.lang.np_vc}** ${serverQueue.voiceChannel}
${bar.splitBar(total, current)} ${song.duration}
      `)
    return message.channel.send(thing)
  },
};
