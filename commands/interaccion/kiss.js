const Discord = require('discord.js');

module.exports = {
  nombre: "kiss",
  alias: ["beso"],

  run: async (client, message, args) => {

  let user = message.mentions.users.first() 
  const nomention = new Discord.MessageEmbed()
  .setDescription(`${client.lang.nomention}`)
  .setColor(`RED`)
  if(!user) return message.channel.send(nomention)
  
  let kissgifs = ['https://cdn.discordapp.com/attachments/868717145729667113/868720248151498792/kiss4.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868720254287740968/kiss3.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868720262118506546/kiss2.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868720262873493555/kiss1.gif']
  let mathgifs = kissgifs[Math.floor(Math.random() * kissgifs.length)]
  
  const embed = new Discord.MessageEmbed()  
  .setDescription(`${message.author} ${client.lang.kiss_gavehima} ${user} :flushed:`)
  .setImage(mathgifs)
  .setColor(`RANDOM`)
  message.channel.send(embed)
  
      }
  }