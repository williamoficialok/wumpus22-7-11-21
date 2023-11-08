/*const Discord = require("discord.js");
module.exports = {
name: "",
alias: [],
gold: "No",
permissions: [],
nsfw: "No",
cooldown: [],
description: "",
category: "Utildad",
usage: "",
run: async (client, message, args) => {
}
}*/


const Discord = require("discord.js");

module.exports = {
    nombre: "info",
    alias: [],
    description: "Comando de información de los comandos.",
    category: "Información.",
    cooldown: "",
    usage: "\`<prefix>info <comando>\`",
    nsfw: "",
    permissions: "",
    gold: "",

    run: async (client, message, args) => {

    const saycmd = args.join(" "); 
if (!saycmd) return message.reply(":eyes: ¡Dime cual es el comando!")
const alias = client.commands.get(saycmd) || client.commands.find(xs => xs.alias && xs.alias.includes(saycmd));
const description = client.commands.get(saycmd) || client.commands.find(xs => xs.description && xs.description.includes(saycmd));
const category = client.commands.get(saycmd) || client.commands.find(xs => xs.category && xs.category.includes(saycmd));
const cooldown = client.commands.get(saycmd) || client.commands.find(xs => xs.cooldown && xs.cooldown.includes(saycmd));
const usage = client.commands.get(saycmd) || client.commands.find(xs => xs.usage && xs.usage.includes(saycmd));
const nsfw = client.commands.get(saycmd) || client.commands.find(xs => nsfw.alias && xs.nsfw.includes(saycmd));
const permissions = client.commands.get(saycmd) || client.commands.find(xs => xs.permissions && xs.permissions.includes(saycmd));
const gold = client.commands.get(saycmd) || client.commands.find(xs => xs.gold, xs.gold.includes(saycmd))
const embed = new Discord.MessageEmbed()
    .setTitle(`✨ Información del comando ${saycmd}`)
    .addField(`❓ Alias`, `\`${alias.alias.join(", ") || `🔴 Sin alias`}\``, true)
    .addField(`📄 Descripción`, `${description.description || "🔴 Sin descripción"}`, true)
    .addField(`💎 Categoría`, `${category.category || "🔴 Sin categoría"}`, true)
    .addField(`💤 Cooldown`, `${cooldown.cooldown || "🟢 0 Segundos"}`, true)
    .addField(`🤔 Use`, `${usage.usage || "🔴 No especifico"}`, true)
    .addField(`:flushed: Nsfw `, `${nsfw.nsfw || "🔴 No"}`, true)
    .addField(`🔨 Permisos`, `${permissions.permissions || "🟢 Ninguno"}`, true)
    .addField(`🟨 Gold`, `${gold.gold || "🟢 No"}`, true)
    .setColor("RANDOM")
    message.channel.send(embed)
    }
}