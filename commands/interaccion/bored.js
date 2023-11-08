const Discord = require("discord.js");

module.exports = {
    nombre: "bored",
    alias: ["aburrido", "aburrio"],
    run: async (client, message, args) => {

let boredgifs = ['https://cdn.discordapp.com/attachments/868717145729667113/868717204001148948/bored3.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868717203606896670/bored1.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868717201291616326/bored4.gif', 'https://cdn.discordapp.com/attachments/868717145729667113/868717198527578122/bored2.gif']

let mathgifs = boredgifs[Math.floor(Math.random() * boredgifs.length)]

const embed = new Discord.MessageEmbed()

.setDescription(`${message.author} ${client.lang.bored_are}`)

.setImage(mathgifs)
.setColor(`RANDOM`)

message.channel.send(embed)

    }
}