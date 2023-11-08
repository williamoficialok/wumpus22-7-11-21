const Discord = require("discord.js");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "addemoji",
    alias: [],
    run: async (client, message, args) => {

        const botnoperms = new Discord.MessageEmbed()
        .setDescription(`${client.lang.botnopermissions}`)
        .setColor(`RED`)
        if (!message.guild.me.hasPermission("MANAGE_EMOJIS")) return message.author.send(botnoperms) 
          
        const usernoperms = new Discord.MessageEmbed()
          .setDescription(`${client.lang.usernopermissions}`)
          .setColor(`RED`)
        if (!message.member.hasPermission('MANAGE_EMOJIS')) return message.channel.send(usernoperms)

        
    const URL = args.join("_")
            if (!URL) {
                const nourl = new Discord.MessageEmbed()
                .setDescription(`${client.lang.addemoji_nourl}`)
                .setColor(`RED`)
                return message.channel.send(nourl);
            }
    
            const name = args[1] ? args[1].replace(/[^a-z0-9]/gi, "") : null;
            if (!name) {
                const noname = new Discord.MessageEmbed()
                .setDescription(`${client.lang.addemoji_noname}`)
                .setColor(`RED`)
                return message.channel.send(noname)
            }
            if (name.length < 2 || name.length > 15) {
                const length = new Discord.MessageEmbed()
                .setDescription(`${client.lang.addemoji_lenght}`)
                .setColor(`RED`)
                return message.channel.send(length);
            }
    
            message.guild.emojis
                .create(URL, name)
                .then(emoji => {
                    const ggez = new Discord.MessageEmbed()
                    .setDescription(`${client.lang.addemoji_done}`)
                    .setImage(URL)
                    .setColor("GREEN")
                    message.channel.send(ggez)
             

            });
        }
    }