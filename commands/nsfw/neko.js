const Discord = require('discord.js')
const NSFW = require("discord-nsfw");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "neko",
    alias: [],
  
    run: async (client, message, args) => {

        const nonsfw = new Discord.MessageEmbed()
        .setDescription(`${messagejson.noinnosfwchannel}`)
        .setColor(`RED`)
        if (!message.channel.nsfw) {
            return message.channel.send(nonsfw)
        }
        const nsfw = new NSFW();
        const imagennsfw1 = await nsfw.nekofeet();
        const imagennsfw2 = await nsfw.nekopussy();
        const imagennsfw3 = await nsfw.nekotits();

        const embed1 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(imagennsfw1)
        const embed2 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(imagennsfw2)
        const embed3 = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setImage(imagennsfw3)
        message.channel.send(embed1)
        message.channel.send(embed2)
        message.channel.send(embed3)
    }
}