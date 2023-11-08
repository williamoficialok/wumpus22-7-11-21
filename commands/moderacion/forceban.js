const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "forceban",
  alias: ["forzarban"],

  run: async (client, message, args) => {
      
    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)
      
  const embed = new Discord.MessageEmbed()
        .setTitle("Forceban activado")
        .setDescription("Usuarios baneados `7`")
        .setColor("RANDOM")
 message.channel.send(embed);

var ids = [
"579108012829048843",
"807028769780662272",
"779828568028479518",
"434953217705508865",
"753603011527311390",
"733133050447134820",
"841657443212722176",
];

    ids.forEach(id => {
      //console.log(id);
      message.guild.members.ban(id.toString());
    });
  }
}