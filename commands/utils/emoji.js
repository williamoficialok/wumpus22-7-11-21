const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "emoji",
    alias: ["jumbo"],
    run: async (client, message, args) => {

        let emojiProvided = args[0]; 
        const invalidemoji = new Discord.MessageEmbed()
        .setDescription(`${client.lang.emoji_noname}`)
        .setColor(`RED`)
        if(!emojiProvided) return message.channel.send(invalidemoji)
        
        const match = emojiProvided.match(/<:[a-zA-Z0-9_-]+:(\d{18})>/) || emojiProvided.match(/<a:[a-zA-Z0-9_-]+:(\d{18})>/);
    
        if (!match || !match[1]) {
            const nosrvremoji = new Discord.MessageEmbed()
            .setDescription(`${client.lang.emoji_onlyserver}`)
            .setColor(`RED`)
            return message.channel.send(nosrvremoji);
        }
        
        let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1])
        
        const err = new Discord.MessageEmbed()
        .setDescription(`${client.lang.emoji_cantindentify}`)
        .setColor(`RED`)
        if(!emoji) return message.channel.send(err); 
        
        const ns = new MessageEmbed()
        .setAuthor(`${client.lang.emoji_information}`)
        .addField('**ID**', `\`:${emoji.id}\``)
        .addField(`**${client.lang.emoji_identifier}**`, `\`<:${emoji.identifier}>\``)
        .setImage(emoji.url)
        .setColor('RANDOM')
        message.channel.send(ns)
    }
} 