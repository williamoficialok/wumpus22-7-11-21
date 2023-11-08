const Discord = require('discord.js')
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "clear",
    alias: ["purge"],

    run: async (client, message, args) => {

        const botnoperms = new Discord.MessageEmbed()
        .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
        .setColor(`RED`)
        if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
          
        const usernoperms = new Discord.MessageEmbed()
          .setDescription(`${messagejson.nopermissions}`)
          .setColor(`RED`)
        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(usernoperms)

        let mensajes = args.join("");

        const nomsgborar = new Discord.MessageEmbed()
            .setDescription(`${emojijson.no} Tienes que poner una cantidad de mensajes para eliminar.`)
            .setColor("RED")
        if (!mensajes) return message.channel.send(nomsgborar);

        message.channel.bulkDelete(mensajes);

        const listo = new Discord.MessageEmbed()
            .setDescription(`${emojijson.si} Se han eliminado ${mensajes} mensajes.`)
            .setColor("GREEN")
        message.channel.send(listo)

            .then(msg => msg.delete({
                timeout: 6000
            }))
        message.delete()
            .catch(e => {
                return;
            });
    }
}