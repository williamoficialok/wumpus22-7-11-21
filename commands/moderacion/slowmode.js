
const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js')
const ms = require('ms');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "slowmode",
	alias: ["sm"],
    run: async(client, message, args) => {

        const botnoperms = new Discord.MessageEmbed()
        .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
        .setColor(`RED`)
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
          
        const usernoperms = new Discord.MessageEmbed()
          .setDescription(`${messagejson.nopermissions}`)
          .setColor(`RED`)
        if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(usernoperms)

        let channel = message.channel

        let time= args [0]

        

        if(time === 'off'){
            channel.setRateLimitPerUser(0)
const usersayoff = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} El slowmode de este canal ha sido desactivado.`)
.setColor("GREEN")
            return message.channel.send(usersayoff)

        }
        const usernosaytime = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Debes escribir un tiempo en milesimas.`)
        .setColor(`RED`)
        if(!time) return message.channel.send(usernosaytime)

        let convert = ms(time)
        let toSecond = Math.floor(convert / 1000)

        const novalidtime = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Número no válido.`)
        .setColor(`RED`)

        if(!toSecond || toSecond === undefined) return message.channel.send(novalidtime)
        
        await channel.setRateLimitPerUser(toSecond)
        const ggez = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`${emojijson.si} El slowmode de este canal ha sido establecido a **${convert}**.`)
        message.channel.send(ggez)

    }
}