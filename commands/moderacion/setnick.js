const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js')
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
        nombre: "setnick",
        alias: [],
    run: async (client, message, args) => {

        const botnoperms = new Discord.MessageEmbed()
        .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
        .setColor(`RED`)
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
          
        const usernoperms = new Discord.MessageEmbed()
          .setDescription(`${messagejson.nopermissions}`)
          .setColor(`RED`)
        if (!message.member.hasPermission('MANAGE_NICKNAMES')) return message.channel.send(usernoperms)

        const persona = message.mentions.members.first()
        const usernomencion = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`${messagejson.nomention}`)
        if(!persona) return message.channel.send(usernomencion)

        const nosaynick = new Discord.MessageEmbed()
        .setColor('RED')
        .setDescription(`${emojijson.no} Dime el nuevo nick qué quieres darle.`)

        const apodo = args.slice(1).join(" ")
        if(!apodo) return message.channel.send(nosaynick)

        const goodcomand = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setDescription(`${emojijson.si} El nuevo nick de **${persona.user.tag}** ahora es ${apodo}`)
        
        persona.setNickname(apodo)
        message.channel.send(goodcomand)

}
}