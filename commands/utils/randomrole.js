const Discord = require('discord.js');

module.exports = {
  nombre: "randonrole",
  alias: [],

  run: async (client, message, args) => {

    let rolrandom = message.guild.roles.cache.random();

    const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription(`${rolrandom}`)
    message.channel.send(embed)
  }
}