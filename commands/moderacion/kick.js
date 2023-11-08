const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "kick",
    alias: ["expulsar"],

    run: async (client, message, args) => {

        const target = message.mentions.members.first()

        const reason = args.slice(1).join(" ")

        const noperms = new Discord.MessageEmbed()
            .setDescription(`${messagejson.nopermissions}`)
            .setColor("RED")
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noperms)

        const nopermsbot = new Discord.MessageEmbed()
            .setDescription(`${messagejson.botnoperms}`)
            .setColor("RED")
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(noperms2)

        const nomencion = new Discord.MessageEmbed()
            .setDescription(`${messagejson.nomention}`)
            .setColor("RED")
        if (!args[0]) return message.channel.send(nomencion)
        
        const invaliduser = new Discord.MessageEmbed()
            .setDescription(`${messagejson.nomention}`)
            .setColor("RED")
        if (!target) return message.channel.send(invaliduser)

        const nopower = new Discord.MessageEmbed()
            .setDescription(`${messagejson.jerarquia}`)
            .setColor("RED")
        if (target.roles.highest.position >= message.member.roles.highest.position) {
            return message.channel.send(nopower)
        }

        const author = new Discord.MessageEmbed()
            .setDescription(`${emojijson.no} No puedes banearte a ti mismo.`)
            .setColor("RED")
            if (target.id === message.author.id) return message.channel.send(author)

        const permsiguales = new Discord.MessageEmbed()
            .setDescription(`${messagejson.jerarquiabot}`)
            .setColor("RED")


        if (target.kickable) {
            let embed = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${emojijson.si} ${target} Ha sido expulsado por la razon \`${reason || "Sin razón especificada"}\``)

            message.channel.send(embed)

            target.kick()

        } else {
            return message.channel.send(permsiguales)
        }
        return undefined
    }
};