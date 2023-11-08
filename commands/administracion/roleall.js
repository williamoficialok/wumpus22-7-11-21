const Discord = require('discord.js');
const db = require("megadb");

module.exports = {
  nombre: "roleall",
  alias: ["addroleall", "addroleeverthing"],

  run: async (client, message, args) => {

    // const botnoperms = new Discord.MessageEmbed()
    // .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    // .setColor(`RED`)
    // if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.author.send(botnoperms) 
      
    // const usernoperms = new Discord.MessageEmbed()
    //   .setDescription(`${messagejson.nopermissions}`)
    //   .setColor(`RED`)
    // if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

    // const role =
    //   message.guild.roles.cache.find(
    //     (role) => role.name === args.join(" ").slice(1)
    //   ) || message.mentions.roles.first() || message.guild.roles.cache.get(args.join(" ").slice(1));

    //   const jerarquia = new Discord.MessageEmbed()
    //   .setDescription(`${emojijson.no} Mi rol debe estar arriba de {role.name}.`)
    // if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
    //   return message.channel.send(jerarquia);
    // }

    // const jerarquia2 = new Discord.MessageEmbed()
    // .setDescription(`${emojijson.no} Tu rol debe estar arriba de {role.name}.`)
    // if (message.member.roles.highest.comparePositionTo(role) < 0) {
    //   return message.channel.send(jerarquia2);
    // }

    // const nomentionrole = new Discord.MessageEmbed()
    // .setDescription(`${emojijson.no} Debes mencionar un rol váliso.`)
    // if (!role) {
    //   return message.channel.send(nomentionrole);
    // }

    // message.guild.members.cache.forEach(member => member.roles.add(role));

    //   const goodroleadd = new Discord.MessageEmbed()
    //   .setDescription(`${emojijson.si} El rol $[role.name} ha sido agregado correctamente`)
    // message.channel.send(goodroleadd);
    message.channel.send("Fixing.")
  }
}