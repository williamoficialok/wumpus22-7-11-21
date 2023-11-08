const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "voiceunmute",
  alias: ["vunmute"],

  run: async (client, message, args) => {

    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

    const unmuteUser = message.guild.member(
      message.mentions.users.first() || message.guild.members.cache.get(args[0])
    );

    const nomentionuser = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nomention}`)
      .setColor(`RED`)

     if (!unmuteUser)
      return message.channel.send(nomentionuser);

      const nomuteduser = new Discord.MessageEmbed()
      .setDescription(`${emojijson.no} El usuario no esta silenciando.`)
      .setColor(`RED`)
      
    if (!unmuteUser.voice.serverMute) {
      return message.channel.send(nomuteduser);
    }

    unmuteUser.voice.setMute(false, "unmuteReason");

    const ggez = new Discord.MessageEmbed()
    .setDescription(`${emojijson.si} Le he desactivado el silencio a ${unmuteUser}`)
    .setColor(`GREEN`)
    message.channel.send(ggez);
  },
};