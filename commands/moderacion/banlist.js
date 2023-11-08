const Discord = require('discord.js');
const { splitMessage } = require('discord.js')
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "banlist",
  alias: ["banlista"],

  run: async (client, message, args) => {
    
    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

    var blist = await message.guild.fetchBans();
const noban = new Discord.MessageEmbed() 
.setDescription(`${emojijson.no} No hay baneos en el servidor.`)
.setColor(`RED`)
    if(blist.size <= 0) return message.channel.send(noban) 

    var bansID = blist.map(b => '**'+b.user.username +'**: '+ b.user.id).join('\n') 

    const description = '**📌 Usuario y ID** \n'+bansID 

    let embed = new Discord.MessageEmbed() 
    .setColor("RANDOM")
    .setTitle('<a:emojialert:825441140068581437> Banlist de '+message.guild.name+'')
    .setDescription(description)
    .setThumbnail(message.guild.iconURL({dynamic: true, size: 1024}))

    const splitDescription = splitMessage(description, {
        maxLength: 2048,
        char: "\n",
        prepend: "",
        append: ""
    });
  
    splitDescription.forEach(async (m) => {
        embed.setDescription(m);
        message.channel.send(embed) 
    });
  }
}