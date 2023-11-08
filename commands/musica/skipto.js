const sendError = require("../../util/error");
const Discord = require("discord.js");

module.exports = {
    nombre: "skipto",
    alias: ["st"],

  run: async (client, message, args) => {
    
    if (!args.length || isNaN(args[0]))
      return message.channel.send({
                        embed: {
                            color: "RED",
                            description: `${client.lang.skipto_incorrectuse}`
                        }
   
                   }).catch(console.error);
        

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return sendError(`${client.lang.noqueue}`,message.channel).catch(console.error);

    if (args[0] > queue.songs.length)
      return sendError(`${client.lang.skipto_ucant}`,message.channel).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }
     try {
    queue.connection.dispatcher.end();
      } catch (error) {
        queue.voiceChannel.leave()
        message.client.queue.delete(message.guild.id);
       return sendError(`${client.lang.error} \n \`${error}\``, message.channel);
      }
    
    queue.textChannel.send({
                        embed: {
                            color: "RANDOM",
                            description: `${client.lang.skipto_skipped} \`${args[0] - 1}\``
                        }
   
                   }).catch(console.error);

  },
};
2