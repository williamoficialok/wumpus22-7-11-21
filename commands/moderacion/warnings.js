const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js')
const db = require('megadb');
const warns = new db.crearDB('warns');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "warns",
    alias: ["warnigns"],
    
    run: async (client, message, args) => {

        const botnoperms = new Discord.MessageEmbed()
        .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
        .setColor(`RED`)
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
          
        const usernoperms = new Discord.MessageEmbed()
          .setDescription(`${messagejson.nopermissions}`)
          .setColor(`RED`)
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(usernoperms)

        let persona = message.mentions.members.first()

const mencion = new Discord.MessageEmbed()
.setDescription(`${messagejson.nomention}`)
.setColor(`RED`)

        if(!persona) return message.channel.send(mencion)

        let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

const nowarnsf = new Discord.MessageEmbed()

.setDescription(`${emojijson.no} Esta persona no tiene warns`)

const resutwarn = new Discord.MessageEmbed()

.setTitle(`Wumpus Gamer | Moderación ${emojijson.blob_ban}`)
.setDescription(`
**Usuario** ${persona}
**Warnigns** ${cantidad} 
`)
.setColor(`RANDOM`)
.setFooter(`Pronto moderador & razón.`)

       
    if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
    message.channel.send(nowarnsf)
    
return;
    }

    message.channel.send(resutwarn)



    }
}