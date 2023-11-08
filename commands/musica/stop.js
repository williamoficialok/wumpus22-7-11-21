const sendError = require("../../util/error"); 

module.exports = {
    nombre: "stop",
    alias: ["bye", "disconnect", "desconectar", "leave"],

  run: async (client, message, args) => {

    const channel = message.member.voice.channel;
    if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError(`${client.lang.nosongsplaying}`, message.channel);

   if (!serverQueue.connection) return
if (!serverQueue.connection.dispatcher) return
     
try {
      serverQueue.connection.dispatcher.end();
      } catch (error) {
        message.guild.me.voice.channel.leave();
        message.client.queue.delete(message.guild.id);
        return sendError(`${client.lang.error} \n \`${error}\``, message.channel);
      }

    message.client.queue.delete(message.guild.id);
    serverQueue.songs = [];
    message.react(`${client.emojijs.pika_bye}`)

  }
}