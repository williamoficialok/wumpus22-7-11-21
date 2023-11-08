const Discord = require('discord.js')
const db = require("megadb")
const mensajeb = new db.crearDB("mensajeb")

module.exports = {
    nombre: "welcome-message",
    alias: ["mensaje-bienvenida", "mensajebienvenidas", "mensajeb"],
    description: "Comando para establecer un mensaje para las bienvenidas.",
    category: "Configuración.",
    cooldown: "",
    usage: "\`<prefix>welcome-message <mensaje>\`",
    nsfw: "",
    permissions: "ADMINISTRATOR",
    gold: "",

    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`No tienes suficientes permisos para ejecutar este comando. Permiso necesario \`ADMINISTRATOR\``)
        const mensaje = args.join(" ")
        if(!mensaje) return message.channel.send(`Debes decir el mensaje para las bienvenidas.`)

        //{user}
        //{user.tag}
        //{servidor}
        //{memberCount}

        mensajeb.establecer(message.guild.id, mensaje)
        message.channel.send(`El mensaje para dar las bienvenidas será este. \n\n${mensaje}`)

    }
}