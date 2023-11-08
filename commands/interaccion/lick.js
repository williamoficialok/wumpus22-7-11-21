const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "lick",
  alias: ["lamer"],

  run: async (client, message, args) => {

  let user = message.mentions.users.first() 
  const nomention = new Discord.MessageEmbed()
  .setDescription(`${emojijson.no} Debes mencionar a alguien.`)
  .setColor(`RED`)
  if(!user) return message.channel.send(nomention)
  
  let lickgifs = ['https://cdn.discordapp.com/attachments/868717145729667113/868721615096119326/lick.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868721607932256296/lick2.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868721596578291743/lick3.gif']
  let mathgifs = lickgifs[Math.floor(Math.random() * lickgifs.length)]
  
  const embed = new Discord.MessageEmbed()  
  .setDescription(`${message.author} ${client.lang.lick_haslickedto} ${user} :flushed:`)
  .setImage(mathgifs)
  .setColor(`RANDOM`)
  message.channel.send(embed)
  
      }
  }