const Discord = require('discord.js');
const { Console } = require('console');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

//Exportación 

module.exports = {
        nombre: "bloquear",
        alias: ['bqr', 'lock'],

    run: async (client, message, args) => {
    //Embed No Permisos
        let CodedByJordi = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nopermissions}`)
        
        if(!message.channel.permissionsFor(message.member).has("ADMINISTRATOR") ) return message.channel.send(CodedByJordi);

        let channel = message.channel;

        try {
            message.guild.roles.cache.forEach(role => {
                channel.createOverwrite(role, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e);
        }
        //Mensaje Canal Bloqueado
        const done = new Discord.MessageEmbed()
        .setDescription(`${emojijson.si} Canal Bloqueado Correctamente!`)
        .setColor(`GREEN`)
        message.channel.send(done);
    }
}

//Codeado Por Jordi ღ#0666  ©