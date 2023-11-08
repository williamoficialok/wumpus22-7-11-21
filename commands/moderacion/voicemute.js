const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "voicemute",
  alias: ["vmute"],

  run: async (client, message, args) => {
      
    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("MUTE_MEMBERS")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(usernoperms)

    const muteUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );
    const muteReason = args.join(" ").slice(23);

    const nomentionusr = new Discord.MessageEmbed()
    .setDescription(`${messagejson.nomention}`)
    .setColor(`RED`)
     if (!muteUser) return message.channel.send(nomentionusr)

     const alreadymuted = new Discord.MessageEmbed()
    .setDescription(`${emojijson.no} Este usuario ya esta silenciando.`)
    .setColor(`RED`)

    if (muteUser.voice.serverMute) {
      return message.channel.send(alreadymuted)
    }

    muteUser.voice.setMute(true, "muteReason");
    const ggez = new Discord.MessageEmbed()
    .setDescription(`${emojijson.si} Este usuario ha sido silenciando correctamente.`)
    .setColor(`GREEN`)
    message.channel.send(ggez);
  },
};