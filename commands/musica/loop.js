const sendError = require("../../util/error");
const Discord = require("discord.js"); 

module.exports = {
    nombre: "loop",
    alias: ["l", "repetir"],

  run: async (client, message, args) => {

    let channel = message.member.voice.channel;
    const notvc = new Discord.MessageEmbed()
    .setDescription(`${client.lang.membernovoicechannel}`)
    .setColor("RED")
        if (!channel) return message.channel.send(notvc);

    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "RANDOM",
                    description: `${client.lang.loop_is} ${serverQueue.loop === true ? `${client.lang.loop_on}` : `${client.lang.loop_off}`}`
                }
            });
        };
    return sendError(`${client.lang.nosongsplaying}`, message.channel); //;-;
  },
};
