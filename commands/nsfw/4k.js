const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "4k",
  alias: ["soyvirgen"],

  run: async (client, message, args) => {

var superagent = require('superagent');
const nonsfw = new Discord.MessageEmbed()
.setDescription(`${messagejson.noinnosfwchannel}`)
.setColor(`RED`)
if (!message.channel.nsfw) return message.channel.send(nonsfw) 

    var lo = new Discord.MessageEmbed()
                .setDescription(`:flushed:`)

    message.channel.send(lo).then(m => {

        superagent.get('https://nekobot.xyz/api/image').query({ type: '4k'}).end((err, response) => {

            var embed_nsfw = new Discord.MessageEmbed()
                .setDescription(`😳`)
                .setImage(response.body.message)
            
            m.edit(embed_nsfw);
        });
    });
  }
}