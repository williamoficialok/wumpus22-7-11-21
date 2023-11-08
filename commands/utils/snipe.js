const Discord = require("discord.js");

module.exports = {
    nombre: "snipe",
    alias: [],
  run: async (client, message, args) => {

    const getmsg = client.snipe.get(message.channel.id);

    const nodelmsg = new Discord.MessageEmbed()
    .setDescription(`${client.lang.snipe_nomessage}`)
    .setColor("RED")
    if (!getmsg) return message.channel.send(nodelmsg)

    const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username, `${message.author.displayAvatarURL()}`)
      .setDescription(`${getmsg.content}`)
      .setTimestamp()
      .setColor("RANDOM");
    if (getmsg.image) embed.setImage(getmsg.image);
    message.channel.send(embed)
      }
    }