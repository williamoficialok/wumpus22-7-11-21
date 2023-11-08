const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "voiceundefean",
  alias: ["vundefean"],

  run: async (client, message, args) => {
      
    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(usernoperms)

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLowerCase());
const nomentionusr = new Discord.MessageEmbed()
.setDescription(`${messagejson.nomention}`)
.setColor(`RED`)
        if(!member) return message.channel.send(nomentionusr)

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Sin razón"


        try {
            const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} Le he quitado el silencio.`)
.setColor(`GREEN`)
            member.voice.setDeaf(false, reason);
            message.channel.send(ggez)
        } 
        
        catch (error) {
            console.log(error)
            const emebederror = new Discord.MessageEmbed()
            .setDescription(`${messagejson.error}`)
            .setColor(`RED`)
            message.channel.send(embederror)
        }

    }
}