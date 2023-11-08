const Discord = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "hentaihigh", 
    alias: [],
    run: async (client, message, args) => {

        const nonsfw = new Discord.MessageEmbed()
.setDescription(`${messagejson.noinnosfwchannel}`)
.setColor(`RED`)
if (!message.channel.nsfw) return message.channel.send(nonsfw)

const image = await nsfw.hentaithigh();

const embed = new Discord.MessageEmbed()
    .setTitle(`:flushed:`)
    .setColor("RANDOM")
    .setImage(image);
message.channel.send(embed);
    }
}
