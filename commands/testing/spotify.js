const spotifytoyt = require("spotify-to-yt"); 
const Discord = require("discord.js"); 

module.exports = {
    nombre: "spotify",
    alias: [],
    run: async (client, message, args) => {

const track = args[0]
if (!track) return message.reply("Link?");

        const result = await spotifytoyt.trackGet(track)
        const embed = new Discord.MessageEmbed()
        .setDescription(`
        **Link** ${result.url}`)
        .setColor("RANDOM")
        message.channel.send(embed)

      }

}