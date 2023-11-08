const sendError = require("../../util/error");
const Discord = require("discord.js");

module.exports = {
    nombre: "resume",
    alias: ["reunudar"],

  run: async (client, message, args) => {

    const channel = message.member.voice.channel;
        if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);

    const serverQueue = message.client.queue.get(message.guild.id);
 
    if (!serverQueue) return sendError(`${client.lang.noqueue}`, message.channel); 

    if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume();
      let xd = new Discord.MessageEmbed()
      .setDescription(`${client.lang.resume_resmued}`)
      .setColor("RANDOM")
      return message.channel.send(xd);
    }


  }
}