const randomanime = require("random-anime");
const Discord = require("discord.js");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "random",
    alias: [],
   
    run: async (client, message, args) => {

        const nonsfw = new Discord.MessageEmbed()
        .setDescription(`${messagejson.noinnosfwchannel}`)
        .setColor(`RED`)
        if (!message.channel.nsfw) {
            return message.channel.send(nonsfw)
        }
        const anime1 = randomanime.nsfw();
        const anime2 = randomanime.nsfw();
        const anime3 = randomanime.nsfw();

        const embed1 = new Discord.MessageEmbed()
            .setImage(anime1)
            .setColor('RANDOM')
        const embed2 = new Discord.MessageEmbed()
            .setImage(anime2)
            .setColor('RANDOM')
        const embed3 = new Discord.MessageEmbed()
            .setImage(anime3)
            .setColor('RANDOM')
        message.channel.send(embed1);
        message.channel.send(embed2);
        message.channel.send(embed3);
    }
}