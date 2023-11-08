const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");
const fetch = require("node-fetch"); 

module.exports = {
  nombre: "api",
  alias: [],

  run: async (client, message, args) => {

    const response = await fetch(`Link`);

    const fetched = await response.json();

    const embed = new Discord.MessageEmbed()
    .setDescription(`${fetched.Propitie}`)
    .setColor("RANDOM")
message.channel.send(embed)
  }
}