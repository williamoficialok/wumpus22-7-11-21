/* This comand is craetes by CrackPastalex UwU =) 
   Este comando fue creado por Crackpastales OwO =)
   pls no muevan nada xD 
   xD
*/
const Discord = require('discord.js');
const db = require(`megadb`)
const canalsgr = new db.crearDB('canalsugerencias')

module.exports = {
  nombre: "suggestchannel",
  alias: ["stc"],

  run: async (client, message, args) => {


    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${client.lang.usernopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(usernoperms)

        const canal = message.mentions.channels.first(); 

        const nomentionchannel = new Discord.MessageEmbed()
        .setDescription(`${client.lang.nomentionchannel}`)
        .setColor(`RED`)
        if(!canal) return message.channel.send(nomentionchannel)

        const done = new Discord.MessageEmbed()
        .setDescription(`${client.lang.setsuggest_done} ${canal}.`)
        .setColor("GREEN")
        message.channel.send(done)

        canalsgr.establecer(`${message.guild.id}`, `${canal.id}`)

        
    }
}