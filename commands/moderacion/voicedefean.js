const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "voicedefean",
  alias: ["vdefean"],

  run: async (client, message, args) => {
      
    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('DEAFEN_MEMBERS')) return message.channel.send(usernoperms)

        
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        const invaliduser = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nomention}`)
        .setColor(`RED`)
        if(!member) return message.channel.send(invaliduser)

        let reason = args.slice(1).join(" ");
        if (!reason) reason = "Sin razon"


        try {
            member.voice.setDeaf(true, reason);
        const ggez = new Discord.MessageEmbed()
        .setDescription(`${emojijson.si} Miembro ensordecido correctamente.`)
            message.channel.send(ggez)
        } 
        
        catch(error) {
            console.log(error)
            message.channel.send(`${messagejson.error}`)
        }

    }
}