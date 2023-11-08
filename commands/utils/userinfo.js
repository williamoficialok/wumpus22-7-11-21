const Discord = require("discord.js"); 
const ms = require("moment"); 

module.exports = {
    nombre: "userinfo",
    alias: [],
    run: async (client, message, args) => {

        const usuaario = message.mentions.members.first() || message.author; 
/*
          let status;
        switch (usuaario.presence.status) {
            case "online":
                status = "🟢 En linea";
                break;
            case "dnd":
                status = "⛔ No molestar";
                break;
            case "idle":
                status = "🌙 Ausente";
                break;
            case "offline":
                status = "⚪ Desconectado";
                break;
        }
*/
          function formatDate (template, date) {
            var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
            date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
            return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
              return template.split(specs[i]).join(item)
            }, template)
          }

        const usrinfo = new Discord.MessageEmbed()
        .setDescription(`**${client.lang.userinfo_information} ${usuaario}**`)
        .addField(`${client.lang.userinfo_user}`, `${usuaario.username}`, true)
        .addField(`${client.lang.userinfo_tag}`, usuaario.discriminator, true)
        .addField(`${client.lang.userinfo_id}`, usuaario.id, true)
        .addField(`${client.lang.userinfo_nick}`, `${usuaario.nickname || "No tiene apodo"}`, true)
        //.addField(`Fecha de ingreso al servidor`, usuaario.joinedAt.toLocaleDateString("es-pe"), true)
        //.addField(`Cuenta creada`, usuaario.user.createdAt.toLocaleDateString("es-pe"), true)
        //.addField(`Actividad`, usuaario.user.presence.game != null ? user.presence.game.name : "Nada", true)
        //.addField(`Roles`, usuaario.roles.cache.map(roles => `\`${roles.name}\``).join(', '), true)
        //.addField(`Estado`, usuaario.presence.activities[0] ? usuaario.presence.activities[0].state : "Sin estado", true)
        //.addField("Se unió el", usuaario.joinedAt.toLocaleDateString("es-pe"))
        //.addField(`Creación de la cuenta`, usuaario.createdAt.toLocaleDateString("es-pe"))
        //.addField("Roles", `${usuaario.roles.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(", ") || "no Roles"}`, true)
        /*.addField("Created the", usuaario.createdAt)
        .addField("Joined the", ms(usuaario.member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss"))*/
        .setColor(`RANDOM`)
        .setThumbnail(usuaario.displayAvatarURL)
        message.channel.send(usrinfo)
    }
}