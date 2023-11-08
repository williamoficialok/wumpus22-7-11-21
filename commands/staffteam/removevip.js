const db = require('megadb');
const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "removevip",
  alias: ["quitarvip"],

  run: async (client, message, args) => {
      
    const onlystaff = new Discord.MessageEmbed()
    .setDescription(`${client.lang.onlywumpustaff}`)
    .setColor("RED")
  if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);

        let vip = new db.crearDB('vip') 
        
        let user = args[0]

        const member = await client.users.fetch(user);

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nomention}`)
        .setColor("RED")
 if (!user) return message.channel.send(nomention)

 const alredyhave = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Este usuario no tiene Wumpus Gold.`)
        .setColor("RED")
        if(!vip.tiene(`${user.id}`)) return message.channel.send(alredyhave) 


        vip.eliminar(member.id)
        const sendlog = new Discord.MessageEmbed()
        .setTitle("Wumpus Gamer | Staff logs :package:")
      .setDescription(`${emojijson.no} Se le removio Wumpus Gold.
      **Usuario** ${member}
      **Staff** ${message.author}`)
      .setColor('RED')
      client.channels.cache.get('870495710087372840').send(sendlog)

        const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.no} Se le removio Wumpus Gold.
**Usuario** ${member}
**Staff** ${message.author}`)
.setColor('RED')

return message.channel.send(ggez);

    }
}