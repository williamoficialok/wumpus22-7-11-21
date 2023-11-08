const db = require('megadb');
const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: ["addblacklist"],
  alias: ["block", "abl", "addb"],
  
  run: async (client, message, args) => {

    const onlystaff = new Discord.MessageEmbed()
    .setDescription(`${client.lang.onlystaffteam}`)
    .setColor("RED")
  if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);
  
let blacklist = new db.crearDB("blacklist");

const id = args[0]
const nothing = new Discord.MessageEmbed()
.setDescription(`${emojijson.no} Proporciona una id.`)
.setColor(`RED`)
if(!id) return message.channel.send(nothing)

const member = await client.users.fetch(id);

const reason = args[1]

if(blacklist.tiene(member.id)){
  const yaestaba = new Discord.MessageEmbed()
    .setDescription(`${emojijson.no} Este usuario ya esta en la blacklist.`)
    .setColor('RED')
    return message.channel.send(yaestaba)
}

blacklist.establecer(member.id, true);
const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} El usuario fue añadido a la Blacklist correctamente.
**Usuario** ${member}
**Razón** ${reason || "Sin razón."}
**Staff** ${message.author}`)
.setColor('GREEN')
  message.channel.send(ggez)

  const logsend = new Discord.MessageEmbed()
  .setTitle(`Wumpus Gamer | Staff logs :package:`)
  .setDescription(`${emojijson.si} Nuevo usuario en la Blacklist.
**Usuario** ${member}
**Razón** ${reason || "Sin razón."}.
**Staff** ${message.author}`)
  .setColor('GREEN')
  client.channels.cache.get('870385794748149790').send(logsend)

    }
}
