const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "hackban",
  alias: ["banid"],

  run: async (client, message, args) => {

    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(usernoperms)

        const id = args.join(' ');
        const noputid = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Nesesitas poner una ID.`)
        .setColor(`RED`)
        if(!id) return message.channel.send(noputid)

        const member = await client.users.fetch(id);
        message.guild.members.ban(member.id);

const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} El usuario **${member.username}** Fue baneado.`)
.setColor(`GREEN`)
        message.channel.send(ggez);

  }
}