const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "anal",
  alias: ["nswfwanal"],

  run: async (client, message, args) => {

    const nonsfw = new Discord.MessageEmbed()
.setDescription(`${messagejson.noinnosfwchannel}`)
.setColor(`RED`)
    if(!message.channel.nsfw) return message.channel.send(nonsfw)
 
        if (!message.guild) return;
            async function anal() {
            const GIF = await neko.nsfw.anal();
            const embed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`:flushed:`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            anal();
  }
}