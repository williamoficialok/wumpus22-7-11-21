const Discord = require("discord.js");
const db = require("megadb");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");
const logs = new db.crearDB("logs")

module.exports = {
    nombre: "setlogs",
    alias: ["set-logs"],
    run: async (client, message, args) => {

        const chid = args[0]
        const chmention = message.mentions.channels.first() || client.channels.cache.get(chid)
        
        const nochmention = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nomentionch}`)
        .setColor("RED")
        if (!chmention) return message.channel.send(nochmention)
const ggez = new Discord.MessageEmbed()
.setDescription(`${emojijson.si} Perfecto, el canal ${chmention} ha sido establecido cómo el canal de Logs.`)
.setColor(`GREEN`)
logs.establecer(message.guild.id, chmention.id)
message.channel.send(ggez)
    }
}