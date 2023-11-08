const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "unban",
  alias: ["ub"],

  run: async (client, message, args) => {

    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('BAN_MEMBERS')) return message.channel.send(usernoperms)

        let userID = args[0];

        const nosayid = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Debes proporcionar una **ID**`)
        .setColor(`RED`)
        if(!userID) return message.channel.send(nosayid)

        const member = await client.users.fetch(userID)


        message.guild.fetchBans().then(bans => {
            const serverdonthavebans = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Este usuario no esta ban.`)
        .setColor(`RED`)
            if(bans.size === 0) return message.channel.send(serverdonthavebans);

        let bUser = bans.find(b => b.user.id == userID)

        const noareban = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Este usuario no esta ban.`)
        .setColor(`RED`)
        if(!bUser) return message.channel.send(noareban)


            message.guild.members.unban(bUser.user)

        })
const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} El usuario **${member.username}** fue desbaneado.`)
.setColor(`GREEN`)
        message.channel.send(ggez)

    }
}