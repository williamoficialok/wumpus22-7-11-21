const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "ban",
    alias: ["banear"],

    run: async (client, message, args) => {

        const target = message.mentions.members.first() || client.users.cache.get(args[0])

        const reason = args.slice(1).join(" ")

        const noperms = new Discord.MessageEmbed()
            .setDescription(`${messagejson.nopermissions}`)
            .setColor("RED")
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(noperms)

        const noperms2 = new Discord.MessageEmbed()
            .setDescription(`${messagejson.botnoperms}`)
            .setColor("RED")
        if (!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(noperms2)

        const nomencion = new Discord.MessageEmbed()
            .setDescription(`${emojijson.no} Menciona al usuario para banearlo.`)
            .setColor("RED")
        if (!args[0]) return message.channel.send(nomencion)

        const invaliduser = new Discord.MessageEmbed()
            .setDescription(`${emojijson.no} Menciona un usuario válido`)
            .setColor("RED")
        if (!target) return message.channel.send(invaliduser)


        const nobanautor = new Discord.MessageEmbed()
            .setDescription(`${emojijson.no} No puedes banearte a ti mismo.`)
            .setColor("RED")
        if (target.id === message.author.id) return message.channel.send(nobanautor)

        const jerarquiagod = new Discord.MessageEmbed()
            .setDescription(`${emojijson.no} El/Ella tienes mas o iguales permisos que tu`)
            .setColor("RED")
        if (target.roles.highest.position >= message.member.roles.highest.position) {
            return message.channel.send(jerarquiagod)
        }
        const godembedxd = new Discord.MessageEmbed()
        .setTitle(`Wumpus Gamer | Moderación ${emojijson.blob_ban}`)
        .setColor(`RANDOM`)
        .setDescription(`Has sido baneado de ${message.guild.name}
        **Moderador** ${message.author}
        **Razón** ${reason}
        **Tiempo** No especifico
        `)
        target.send(godembedxd)
    
            let donegod = new Discord.MessageEmbed()
                .setColor("GREEN")
                .setDescription(`${emojijson.si} **${target.tag}** Fue baneado.`)

            message.channel.send(donegod)

            target.ban()

    }
}