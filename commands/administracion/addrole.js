const Discord = require('discord.js');
const db = require("megadb");

module.exports = {
  nombre: "addrole",
  alias: ["añadirrol", "roleadd", "afegirpaper", "add-rol", "add-role"],

  run: async (client, message, args) => {

    let usuario = message.mentions.members.first();
    let rol = message.mentions.roles.first();

    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${client.lang.botnopermissions}`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${client.lang.usernopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

    const nomentionuser = new Discord.MessageEmbed()
      .setDescription(`${client.lang.nomention}`)
      .setColor(`RED`)
    if (!usuario) return message.channel.send(nomentionuser)

    const nomentionrol = new Discord.MessageEmbed()
      .setDescription(`${client.lang.nomentionrole}`)
      .setColor(`RED`)
    if (!rol) return message.channel.send(nomentionrol)

    usuario.roles.add(rol)
    const sisi = new Discord.MessageEmbed()
      .setDescription(`${client.lang.addr_therole} ${rol} ${client.lang.addr_to} ${usuario}`)
      .setColor(`GREEN`)

    message.channel.send(sisi)
  }
}
