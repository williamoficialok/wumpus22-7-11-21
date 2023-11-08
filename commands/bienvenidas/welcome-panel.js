const Discord = require('discord.js')
const db = require("megadb")
const canalbienvenida = new db.crearDB("canalbienvenida")
const titleb = new db.crearDB("titleb")
const mensajeb = new db.crearDB("mensajeb")
const authorb = new db.crearDB("authorb")

module.exports = {
    nombre: "welcome-panel",
    alias: ["panel-bienvenidas", "panelbienvenidas", "panelb"],
    description: "Panel de bienvenidas.",
    category: "Configuración.",
    cooldown: "",
    usage: "\`<prefix>welcome-panel\`",
    nsfw: "",
    permissions: "ADMINISTRATOR",
    gold: "",

    run: async (client, message, args) => {

        var titulo = await titleb.get(message.guild.id)
        var canalb = await canalbienvenida.get(message.guild.id)
        var mensajex = await mensajeb.get(message.guild.id)
        var autor = await authorb.get(message.guild.id)
        if(titulo) titulo = `${titulo}`
        if(canalb) canalb = `<#${canalb}> ID: ${canalb}`
        if(mensajex) mensajex = `${mensajex}`
        if(autor) autor = `${autor}`
        if(!titulo) titulo = `No establecido.`
        if(!canalb) canalb = `No establecido.`
        if(!mensajex) mensajex = `No establecido.`
        if(!autor) autor = `No establecido.`

        const panelb = new Discord.MessageEmbed()
        .setTitle("Panel de bienvenida.")
        .addField(`🔨 Canal:`, `${canalb}`, true)
        .addField(`🔨 Titulo:`, `${titulo}`, true)
        .addField(`🔨 Mensaje:`, `${mensajex}`, true)
        .addField(`🔨 Autor:`, `${autor}`, true)
        .setColor("RANDOM")

        message.channel.send(panelb)
    }
}