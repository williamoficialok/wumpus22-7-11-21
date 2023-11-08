const sendError = require("../../util/error");
const Discord = require("discord.js");

module.exports = {
    nombre: "remove",
    alias: ["rm", "quitar"],

  run: async (client, message, args) => {

    const channel = message.member.voice.channel;
        if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);

   const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError(`${client.lang.noqueue}`,message.channel).catch(console.error);

    if (!args[0]) return sendError(`${client.lang.remove_incorrectuse}`);

    if (isNaN(args[0])) return sendError(`${client.lang.remove_incorrectuse}`);

    if (queue.songs.length == 1) return sendError(`${client.lang.noqueue}`,message.channel).catch(console.error);

    if (args[0] > queue.songs.length)
      return sendError(`${client.lang.remove_ucant}`,message.channel).catch(console.error);
try {
    const song = queue.songs.splice(args[0] - 1, 1); 
    sendError(`\`${song[0].title}\` ${client.lang.remove_was}.`,queue.textChannel).catch(console.error);
} catch (error) {
        return sendError(`${client.lang.error} \n \`${error}\``, message.channel);
      }

  },
};
