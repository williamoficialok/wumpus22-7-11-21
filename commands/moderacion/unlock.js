const Discord = require('discord.js');
const { Console } = require('console');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

//Exportación 

module.exports = {
        nombre: "unlock",
        aliases: ['desblock', 'desbloquear', 'unblock'],

    run: async (client, message, args) => {
    //Embed No Permisos
        let CodedByJordi = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nopermissions}`)
        .setColor(`RED`)
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send(CodedByJordi);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: true,
                    ADD_REACTIONS: true
                });
            });
        } catch (e) {
            console.log(e);
        }
        //Mensaje Canal Bloqueado
                let listo = new Discord.MessageEmbed()
        .setDescription(`${emojijson.si} **Canal Desbloqueado Correctamente.**`)
        .setColor(`GREEN`)
        message.channel.send(listo);
    }
}

//Codeado Por Jordi ღ#0666  ©