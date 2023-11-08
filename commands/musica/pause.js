const sendError = require("../../util/error");
const Discord = require("discord.js");

module.exports = {
    nombre: "pause",
    alias: ["mpause", "pausar"],

  run: async (client, message, args) => {

    const serverQueue = message.client.queue.get(message.guild.id);
    if (serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
	    try {
      serverQueue.connection.dispatcher.pause()
	  } catch (error) {
        message.client.queue.delete(message.guild.id);
        return sendError(`${client.lang.error} \n ${error}`, message.channel);
      }	    

      let ggez = new Discord.MessageEmbed()
      .setDescription(`${client.lang.pause_paused}`)
      .setColor("RANDOM")
      return message.channel.send(ggez);
    }

    return sendError(`${client.lang.nosongsplaying}`, message.channel);

  },
};
