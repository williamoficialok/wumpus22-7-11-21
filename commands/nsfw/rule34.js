const Discord = require('discord.js')
const booru = require("booru")
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "rule34",
    alias: [],
   
    run: async (client, message, args) => {

        const nonsfw = new Discord.MessageEmbed()
        .setDescription(`${messagejson.noinnosfwchannel}`)
        .setColor(`RED`)
        if (!message.channel.nsfw) {
            return message.channel.send(nonsfw)
        }
        const tags = args.join(" ")
        const nosearch = new Discord.MessageEmbed()
            .setDescription(`${emojijson.no} Escribe algo para buscar.`)
            .setColor('RED')
        if (!tags) return message.channel.send(nosearch)
        booru.search('rule34', [tags], {
                limit: 1,
                random: true
            })
            .then(posts => {
                for (let post of posts) {
                    const embed = new Discord.MessageEmbed()
                        .setColor('RANDOM')
                        .setTitle(`Resultado de la busqueda ${tags}`)
                        .setImage(post.fileUrl)
                    message.channel.send(embed)
                }
            }).catch(e => message.channel.send("error " + e))
    }
}