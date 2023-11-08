const { MessageEmbed } = require('discord.js');
const db = require('megadb');
const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "removeblacklist",
  alias: ["rmb", "rbl"],

  run: async (client, message, args) => {
      
    const onlystaff = new Discord.MessageEmbed()
    .setDescription(`${client.lang.onlywumpustaff}`)
    .setColor("RED")
  if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);
  
        let blacklist = new db.crearDB('blacklist');
        
 const id = args[0]

 if (!id) {
  const err = new MessageEmbed()
    .setDescription(`${emojijson.no} Debes proporcionar una id.`)
    .setColor('RED')
    return message.channel.send(err)
}

 const reason = args[1]
 const member = await client.users.fetch(id);

 if(!blacklist.has(member.id)){
    const noestaba = new MessageEmbed()
      .setDescription('<a:no:825110640988913684> | Este usuario no estaba en la blacklist') // Al no ejecutar la acciÃ³n salta Ã©ste mensaje.
      .setColor('RED')
      return message.channel.send(noestaba)
  }

 blacklist.eliminar(member.id); 

 const ggez = new Discord.MessageEmbed()
 .setDescription(`${emojijson.no} Usuario eliminado de la Blacklist
 **Usuario** ${member}
 **Staff** ${message.author}
 **Razón** ${reason || "Sin razón"}`)
 .setColor("RED")
 message.channel.send(ggez) 

 const sendlog = new Discord.MessageEmbed()
 .setTitle("Wumpus Gamer | Staff logs :package:")
 .setDescription(`${emojijson.no} Usuario eliminado de la Blacklist
 **Usuario** ${member}
 **Staff** ${message.author}
 **Razón** ${reason || "Sin razón"}`)
 .setColor("RED")
 client.channels.cache.get('870385794748149790').send(sendlog)

    }
}
