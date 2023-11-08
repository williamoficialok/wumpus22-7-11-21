const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const db = require('megadb');
const warns = new db.crearDB('warns');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: 'warn',
    alias: ["2"],
    
    run: async (client, message, args) => {

        const botnoperms = new Discord.MessageEmbed()
        .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
        .setColor(`RED`)
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
          
        const usernoperms = new Discord.MessageEmbed()
          .setDescription(`${messagejson.nopermissions}`)
          .setColor(`RED`)
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

        let persona = message.mentions.users.first()

const nomencion = new Discord.MessageEmbed()
.setDescription(`${messagejson.nomention}`)
if(!persona) return message.channel.send(nomencion)

var razon = args.slice(1).join(" ")
if(!razon){
    razon = 'No especifico'
}
const goodwarn = new Discord.MessageEmbed()

.setTitle(`Wumpus Gamer | Moderación ${emojijson.blob_ban}`)
.setDescription(`
**${persona.tag}** Fue advertido.`)
.setColor(`RANDOM`)

if(!warns.tiene(`${message.guild.id}.${persona.id}`))
warns.establecer(`${message.guild.id}.${persona.id}`, 0)

warns.sumar(`${message.guild.id}.${persona.id}`, 1)

message.channel.send(goodwarn)
        
        const alemededelwarneado = new Discord.MessageEmbed()

.setTitle(`Wumpus Gamer | Moderación ${emojijson.blob_ban}`)
.setDescription(`
**Moderador** ${message.author}
Razón ${razon}
`)
.setColor(`RANDOM`)
 
persona.send(alemededelwarneado)
    }
}
