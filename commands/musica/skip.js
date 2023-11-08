const sendError = require("../../util/error");
const Discord = require("discord.js");

module.exports = {
    nombre: "skip",
    alias: ["s"],

  run: async (client, message, args) => {

    const channel = message.member.voice.channel
    if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError(`${client.lang.noqueue}`, message.channel);

        if(!serverQueue.connection) return; 
    if(!serverQueue.connection.dispatcher) return; 
    message.react("868625990908268594")
     if (serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;

      serverQueue.connection.dispatcher.resume();
      let xd = new Discord.MessageEmbed()
      .setDescription(`${client.lang.skip_resumed}`)
      .setColor("RANDOM")

       
   return message.channel.send(xd).catch(err => console.log(err));
      
    }

       try {
      serverQueue.connection.dispatcher.end()
      } catch (error) {
        serverQueue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
        return sendError(`${client.lang.error}\n \`${error}\``, message.channel); 
      }

    }
}
