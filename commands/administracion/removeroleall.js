//Error, please fix xD
const Discord = require('discord.js');
const db = require("megadb");

module.exports = {
  nombre: "removeroleall",
  alias: ["remoroleall", "remroleeverthing"],

  run: async (client, message, args) => {

//     const botnoperms = new Discord.MessageEmbed()
//     .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
//     .setColor(`RED`)
//     if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
//     const usernoperms = new Discord.MessageEmbed()
//       .setDescription(`${messagejson.nopermissions}`)
//       .setColor(`RED`)
//     if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

//     let role = message.mentions.roles.first();

//       const MiRolDebeEstarArriba = new Discord.MessageEmbed()
//       .setDescription(`${messagejson.miroldebeestarrriba} ${role}`)
//       .setColor(`RED`)
//     if (message.guild.me.roles.highest.comparePositionTo(role) < 0) {
//       return message.channel.send(MiRolDebeEstarArriba);
//     }

//     const TuRolDebeEstarArriba = new Discord.MessageEmbed()
//     .setDescription(`${messagejson.turoldebeestararriba} ${role}`)
//     .setColor(`RED`)
//     if (message.member.roles.highest.comparePositionTo(role) < 0) {
//       return message.channel.send(TuRolDebeEstarArriba);
//     }
//     const nomentionrole = new Discord.MessageEmbed()
//     .setDescription(`${emojijson.no} Menciona un rol válido.`)
//     .setColor(`RED`)
//     if (!role) {
//       return message.channel.send(nomentionrole);
//     }

//     message.guild.members.cache.forEach(member => member.roles.remove(role));

// const ggez = new Discord.MessageEmbed()
// .setDescription(`${emojijson.si} Él rol ${role} ha sido removido correctamente de ${message.guilds.members} usuarios.`)
//     message.channel.send(`<a:wb_si:840601875215679539> | El rol ${role} ha sido removido de todos los miembros.`);
//   },
// };
message.channel.send("Fixing.")
  }
}
