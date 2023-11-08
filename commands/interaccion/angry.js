const Discord = require("discord.js");

module.exports = {
    nombre: "angry",
    alias: ["enojado", "enojao"],
    run: async (client, message, args) => {

let enojadogifs = ['https://cdn.discordapp.com/attachments/781706614410706964/817251773759750174/image0.gif', 'https://cdn.discordapp.com/attachments/781706614410706964/817251987782369300/image0.gif', 'https://cdn.discordapp.com/attachments/781706614410706964/817252153444794368/image0.gif', 'https://cdn.discordapp.com/attachments/781706614410706964/817252307799638026/image0.gif', 'https://cdn.discordapp.com/attachments/781706614410706964/817252430009991188/image0.gif', 'https://cdn.discordapp.com/attachments/781706614410706964/817252551095091220/image0.gif', 'https://cdn.discordapp.com/attachments/781706614410706964/817252685597769748/image0.gif', 'https://cdn.discordapp.com/attachments/781706614410706964/817252792895930409/image0.gif']

let angry = enojadogifs[Math.floor(Math.random() * enojadogifs.length)]

const embed = new Discord.MessageEmbed()

.setDescription(`${message.author} ${client.lang.angry_are}`)

.setImage(angry)
.setColor(`RANDOM`)

message.channel.send(embed)

    }
}