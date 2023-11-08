const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "voicemove",
  alias: ["vm"],

  run: async (client, message, args) => {
 
    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(usernoperms)

        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase());

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nomention}`)
        .setColor(`RED`)
        if(!member) return message.channel.send(nomention)

        let channel = message.mentions.channels.first() || bot.guilds.cache.get(message.guild.id).channels.cache.get(args[1]) || message.guild.channels.cache.find(c => c.name.toLowerCase() === args.slice(1).join(' ').toLocaleLowerCase());
        const novoicechanneltype = new Discord.MessageEmbed()
        .setDescription(`Sólo se admiten canales de voz.......`)
        .setColor(`RED`)
        if (!channel.type === "voice") return message.channel.send(novoicechanneltype) 

        try {
            member.voice.setChannel(channel);
            const ggez = new Discord.MessageEmbed()
            .setDescription(`Miembro movido correctamente.`)
            .setColor(`GREEN`)
            message.channel.send(ggez)
        } 
        
        catch(error) {
            console.log(error);
            const errorembed = new Discord.MessageEmbed()
            .setDescription(`${messagejson.error}`)
            .setColor(`RED`)
            message.channel.send(errorembed)
        }

    }
}