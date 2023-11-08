const Discord = require('discord.js')
const db = require("megadb")
const canalbienvenida = new db.crearDB("canalbienvenida")

module.exports = {
    nombre: "welcome-channel",
    alias: ["canal-bienvenidas", "canalbienvenidas", "canalb"],
    description: "Comando para establecer un canal para las bienvenidas.",
    category: "Configuración.",
    cooldown: "",
    usage: "\`<prefix>welcome-channel <canal>\`",
    nsfw: "",
    permissions: "ADMINISTRATOR",
    gold: "",

    run: async (client, message, args) => {

        var perms = message.member.hasPermission("ADMINISTRATOR")
        if(!perms) return message.channel.send(`No tienes suficientes permisos para ejecutar este comando. Permiso necesario \`ADMINISTRATOR\``)

        let id = args[0]
        if(!id) return message.channel.send(`Debes poner una ID.`)

        const canal = message.mentions.channels.first() || client.channels.cache.get(id)
        if(!canal.isText()) return message.channel.send(`No puedes establecer un canal que no sea de texto.`)
  
        const canalservidor = message.guild.channels.resolve(canal.id)
        if(!canalservidor) return message.channel.send(`Debes mencionar un canal.`)

        canalbienvenida.establecer(message.guild.id, canalservidor.id)
        message.channel.send(`El canal ha sido establecido con éxito.`)

    }
}