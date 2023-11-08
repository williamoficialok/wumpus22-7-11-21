const Discord = require('discord.js')
const db = require("megadb")
const titleb = new db.crearDB("titleb")

module.exports = {
    nombre: "welcome-title",
    alias: ["titulo-bienvenida", "titulobienvenidas", "titleb"],
    description: "Comando para establecer un titulo para las bienvenidas.",
    category: "Configuración.",
    cooldown: "",
    usage: "\`<prefix>welcome-title <mensaje>\`",
    nsfw: "",
    permissions: "ADMINISTRATOR",
    gold: "",

    run: async (client, message, args) => {

        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`No tienes suficientes permisos para ejecutar este comando. Permiso necesario \`ADMINISTRATOR\``)
        const mensaje = args.join(" ")
        if(!mensaje) return message.channel.send(`Debes decir el titulo para las bienvenidas.`)

        //{user}
        //{user.tag}
        //{servidor}
        //{memberCount}

        titleb.establecer(message.guild.id, mensaje)
        message.channel.send(`El titulo para las bienvenidas sera este. \n\n${mensaje}`)

    }
}