const Discord = require('discord.js');
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "",
  alias: [],

  run: async (client, message, args) => {

    const embed = new Discord.MessageEmbed()
    .setDescription(`${client.lang.NombreJson}`)
    .setColor("RANDOM")

message.channel.send(embed)
  }
}