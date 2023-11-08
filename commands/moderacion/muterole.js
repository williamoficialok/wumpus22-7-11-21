const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Collection
const db = require("megadb")
const muterol = new db.crearDB("muterole")
const ms = require("ms")
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "muterole",
  alias: ["roldelmute", "mt"],

  run: async (client, message, args) => {

    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(usernoperms)

let rol = message.mentions.roles.first()

const nomentionrole = new Discord.MessageEmbed()
.setDescription(`${messagejson.nomentionrole}`)
.setColor(`RED`)
if(!rol) return message.channel.send(nomentionrole)

muterol.establecer(message.guild.id, rol.id)

const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} El rol ${rol.name} ha sido establecido para mutear.`)
.setColor(`GREEN`)

message.channel.send(ggez)


  }
}
