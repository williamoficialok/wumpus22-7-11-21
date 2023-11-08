const Discord = require('discord.js');
const spanishmemes = require("spanish.memes");
const meme = spanishmemes.Meme()

module.exports = {
  nombre: "meme",
  alias: ["momaso"],

  run: async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
        .setColor(`RANDOM`)
        .setTitle(`Soon English..`)
        .setImage(spanishmemes.Meme())
 message.channel.send(embed); 
}

  }