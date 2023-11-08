const Discord = require('discord.js');

module.exports = {
  nombre: "randonchannel",
  alias: [],

  run: async (client, message, args) => {

    let channelrandom = message.guild.channels.cache.random();

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${channelrandom}`)
    message.channel.send(embed)
  }
}