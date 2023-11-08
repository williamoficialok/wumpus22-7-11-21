const Discord = require("discord.js"); 

module.exports = {
    nombre: "servericon",
    alias: ["sicon"],

    run: async (client, message, args) => {

const server = message.guild; 

        const embed = new Discord.MessageEmbed()
            .setTitle(`${client.lang.servericon_from} ${message.guild}`)
            .setColor('RANDOM')
            .setImage(server.iconURL({ dynamic: true, size: 1024 }))

        message.channel.send(embed);
    }
}