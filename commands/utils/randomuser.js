const Discord = require('discord.js');

module.exports = {
  nombre: "randomuser",
  alias: [],

  run: async (client, message, args) => {

    let member = message.guild.members.cache.random();

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${member}`)
    message.channel.send(embed)
  }
}