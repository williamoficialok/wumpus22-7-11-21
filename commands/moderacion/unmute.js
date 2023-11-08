const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "unmute",
  alias: ["desmutear"],

  run: async (client, message, args) => {

  const botnoperms = new Discord.MessageEmbed()
  .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
  .setColor(`RED`)
  if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
    
  const usernoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.nopermissions}`)
    .setColor(`RED`)
  if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(usernoperms)

  const rol = message.guild.roles.cache.find(r => r.name === "Muted")

  const usuario = message.mentions.members.first() 

  const razon = args.slice(1).join(" ") 

  const nouser = new Discord.MessageEmbed()
  .setColor(`RED`)
  .setDescription(`${messagejson.nomention}`)
  if (!usuario) return message.channel.send(nouser) 

  const embed = new Discord.MessageEmbed()
 .setColor("RANDOM") 
 .setTitle(`Wumpus Gamer | Moderación ${emojijson.blob_ban}`)
 .addField("Usuario", `${usuario.displayName} `)
 .addField("Moderador", `${message.member.displayName}`)
 message.channel.send(embed)
 usuario.roles.remove(rol)
  }
}
