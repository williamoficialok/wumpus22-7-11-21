const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const warns = new db.crearDB('warns');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "unwarn",
    alias: ["uw"],
    
    run: async (client, message, args) => {

const noperms = new Discord.MessageEmbed()

const botnoperms = new Discord.MessageEmbed()
.setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
.setColor(`RED`)
if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
  
const usernoperms = new Discord.MessageEmbed()
  .setDescription(`${messagejson.nopermissions}`)
  .setColor(`RED`)
if (!message.member.hasPermission('KICK_MEMBERS')) return message.channel.send(usernoperms)

        const user = message.mentions.members.first()

const mencion = new Discord.MessageEmbed()
.setDescription(`${messagejson.nomention}`)
.setColor(`RED`)

        if(!user) return message.channel.send(mencion)

const nowarns = new Discord.MessageEmbed()
.setDescription(`${emojijson.no} Este usuario no tiene advertencias.`)
.setColor(`RED`)

        const cantidad = await warns.obtener(`${message.guild.id}.${user.id}`)

        if(cantidad < 1 ) return message.channel.send(nowarns)
        
 const goodunwarn = new Discord.MessageEmbed()

.setTitle(`Wumpus Gamer | Moderación`)
.setDescription(`
**Usuario** ${user}
**Moderador** ${message.author.tag}
**Advetenciass removidas** 1 
`)
.setColor(`GREEN`)

        warns.restar(`${message.guild.id}.${user.id}`, 1)

        message.channel.send(goodunwarn)

    }
}