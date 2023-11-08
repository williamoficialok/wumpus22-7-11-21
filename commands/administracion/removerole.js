const Discord = require('discord.js');
const db = require("megadb");

module.exports = {
  nombre: "removerole",
  alias: ["remrole", "removerole", "removerrol"],

  run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
    let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0])

    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${client.lang.botnopermissions}`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${client.lang.usernopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

        const nomentionuser = new Discord.MessageEmbed()
        .setDescription(`${client.lang.nomention}`)
        .setColor(`RED`)
        if(!user) return message.channel.send(nomentionuser)

        const nomentionrole = new Discord.MessageEmbed()
        .setDescription(`${client.lang.nomentionrole}`)
        .setColor(`RED`)
        if (!role) return message.channel.send(nomentionrole) 

        const nohaverole = new Discord.MessageEmbed() 
        .setDescription(`${client.lang.remrol_donthave}`)
        .setColor(`RED`)
        if (!user.roles.cache.has(role.id)) return message.channel.send(nohaverole)

        const jerarquiagood = new Discord.MessageEmbed()
        .setDescription(`${client.lang.jera_rol_moreup_bot}`)
        .setColor(`RED`)
        if (!role.editable) return message.channel.send(jerarquiagood)
        
        user.roles.remove(role.id)
        const done = new Discord.MessageEmbed()
        .setDescription(`${client.lang.remrol_therol} ${role} ${client.lang.remrol_removed} ${user}.`)
        .setColor(`GREEN`)
        return message.channel.send(done) 

    }
  }