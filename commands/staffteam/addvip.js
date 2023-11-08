const db = require('megadb');
const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "addvip",
  alias: ["añadirvip"],

  run: async (client, message, args) => {

        const onlystaff = new Discord.MessageEmbed()
        .setDescription(`${client.lang.onlywumpustaff}`)
        .setColor("RED")
      if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);     

        let vip = new db.crearDB("vip");
      
        let user = args.join(" ")
        const fetchuser = await client.users.fetch(user);

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nomention}`)
        .setColor(`RED`)
        if(!user) return message.channel.send (nomention)


const alredyhavevip = new Discord.MessageEmbed()
.setDescription(`El usuario ya tiene Wumpus Gold!`)
.setColor(`RED`)
        if(vip.has(fetchuser.id))return message.channel.send(alredyhavevip) 


        const sendlogs = new Discord.MessageEmbed()
        .setTitle("Wumpus Gamer | Staff logs :package:")
        .setDescription(`${emojijson.si} Un nuevo usuario ha sido registrado con Wumpus Gold.
        **Usuario** ${fetchuser}
        **Staff** ${message.author}`)
        .setColor("GREEN")
        client.channels.cache.get('870495710087372840').send(sendlogs)

        vip.establecer(fetchuser.id, true);
        const ggez = new Discord.MessageEmbed()
        .setDescription(`${emojijson.si} El usuario ${fetchuser} ha sido registrado con Wumpus Gold correctamente.`)
        .setColor(`GREEN`)
            return message.channel.send(ggez);

    }
}