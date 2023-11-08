const Discord = require('discord.js');

module.exports = {
  nombre: "kill",
  alias: ["matar"],

  run: async (client, message, args) => {

  let user = message.mentions.users.first();

  const nomention = new Discord.MessageEmbed()
  .setDescription(`${client.lang.nomention}`)
  .setColor("RED")
  if(!user) return message.channel.send(nomention);
  
  let killgifs = ['https://cdn.discordapp.com/attachments/868717145729667113/868719579801722942/xd.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868718980980936755/kill3.gif']
  let mathgifs = killgifs[Math.floor(Math.random() * killgifs.length)]
  
  const embed = new Discord.MessageEmbed()  
  .setDescription(`${message.author} ${client.lang.kill_haskilled} ${user}`)
  .setImage(mathgifs)
  .setColor(`RANDOM`)
  message.channel.send(embed)
  
      }
  }