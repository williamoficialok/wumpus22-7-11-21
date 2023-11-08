const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js')
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
        nombre: "nuke",
        alias: ["kaboom"],
    run: async (client, message, args) => {

        const botnoperms = new Discord.MessageEmbed()
        .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
        .setColor(`RED`)
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
          
        const usernoperms = new Discord.MessageEmbed()
          .setDescription(`${messagejson.nopermissions}`)
          .setColor(`RED`)
        if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)
        
        await message.channel.clone().then

        ((ch) =>{ch.setParent(message.channel.parent.id);

        ch.setPosition(message.channel.position);

        message.channel.delete().then

const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} Canal nukeado correctamente por ${message.author}.`)
.setImage(`https://cdn.discordapp.com/attachments/847670510326513744/869446105711144960/Kaboooom.gif`)
.setColor(`GREEN`)
        ch.send(ggez)
  
 
    });
    }
}