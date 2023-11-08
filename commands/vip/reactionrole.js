const Discord = require('discord.js');
const db = require("megadb")
const reactionrole = new db.crearDB("reactionrole")

module.exports = {
  nombre: "reactionrole",
  alias: ["sl"],

  run: async (client, message, args) => {
//             let blacklist = new db.crearDB('blacklist');

//   if(blacklist.tiene(message.author.id)){    
//   const awa = new Discord.MessageEmbed()
//   .setDescription(':x: | No puedes usar este comando, estás en la blacklist!') 
//   .setColor('RED') 
//   return message.channel.send(awa)
//   }
//       let vip = new db.crearDB('vip') 
// if(!vip.tiene(message.author.id)) return message.channel.send('<a:no:825110640988913684> | Debes tener vip para utilizar este comando.')

//     const id = args[0]
//     if(!id) return message.channel.send("**Debes mencionar un canal válido!!**")

//     const canal = message.mentions.channels.first() || client.channels.cache.get(id)
//     if(!canal) return message.channel.send("**Debes mencionar un canal válido!!**")

//     let canalservidor = message.guild.channels.resolve(canal.id)
//     if(!canalservidor) return message.channel.send("**Debes mencionar un canal de este servidor!!**")

//     reactionrole.establecer(message.guild.id, canal.id)

//     message.channel.send(`A la hora de reaccionar con emoji en el canal ${canal.name} se le otorgara el rol rol `)
   }
}
