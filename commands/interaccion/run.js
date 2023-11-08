const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "run",
  alias: ["correr"],

  run: async (client, message, args) => {
  
  let rungifs = ['https://cdn.discordapp.com/attachments/868717145729667113/868723547848179722/run4.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868723552390643752/run3.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868723554022219816/run2.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868723554936582175/run1.gif']
  let mathgifs = rungifs[Math.floor(Math.random() * rungifs.length)]
  
  const embed = new Discord.MessageEmbed()  
  .setDescription(`${client.lang.run_running}`)
  .setImage(mathgifs)
  .setColor(`RANDOM`)
  message.channel.send(embed)
  
      }
  }