const Discord = require('discord.js')
const db = require("megadb")
const authorb = new db.crearDB("authorb")

module.exports = {
    nombre: "welcome-author",
    alias: ["author-bienvenida", "autorbienvenidas", "authorb"],
    description: "Comando para establecer un author para las bienvenidas.",
    category: "Configuración.",
    cooldown: "",
    usage: "\`<prefix>welcome-author <mensaje>\`",
    nsfw: "",
    permissions: "ADMINISTRATOR",
    gold: "",

    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`No tienes suficientes permisos para ejecutar este comando. Permiso necesario \`ADMINISTRATOR\``)
        const mensaje = args.join(" ")
        if(!mensaje) return message.channel.send(`Debes decir el author para las bienvenidas.`)

        //{user}
        //{user.tag}
        //{servidor}
        //{memberCount}

        authorb.establecer(message.guild.id, mensaje)
        message.channel.send(`El author para las bienvenidas sera este. \n\n${mensaje}`)

    }
}