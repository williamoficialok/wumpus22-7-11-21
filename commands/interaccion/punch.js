const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "punch",
  alias: ["pegar"],

  run: async (client, message, args) => {

  let user = message.mentions.users.first() 
  const nomention = new Discord.MessageEmbed()
  .setDescription(`${emojijson.no} Debes mencionar a alguien.`)
  .setColor(`RED`)
  if(!user) return message.channel.send(nomention)
  
  let punchgifs = ['https://cdn.discordapp.com/attachments/868717145729667113/868722745930821702/punch4.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868722746480279562/punch3.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868722753602211870/punch2.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868722760933847050/punch1.gif']
  let mathgifs = punchgifs[Math.floor(Math.random() * punchgifs.length)]
  
  const embed = new Discord.MessageEmbed()  
  .setDescription(`${message.author} ${client.lang.punch_gaspunchedto} ${user} D:`)
  .setImage(mathgifs)
  .setColor(`RANDOM`)
  message.channel.send(embed)
  
      }
  }