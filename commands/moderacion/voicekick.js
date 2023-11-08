const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "voicekick",
  alias: ["vk"],

  run: async (client, message, args) => {

    const nomention = new Discord.MessageEmbed()
    .setDescription(`${messagejson.nomention}`)
    .setColor(`RED`)
    if (!message.mentions.members.first())
      return message.channel.send(nomention);

    let { channel } = message.mentions.members.first().voice;

    const novoicechannel = new Discord.MessageEmbed()
    .setDescription(`${emojijson.no} El usuario no estaá en ningún canal de voz.`)
    .setColor(`RED`)

    if (!channel)       return message.channel.send(novoicechannel);


    message.mentions.members.first().voice.kick();
    
    const ggez = new Discord.MessageEmbed()
    .setDescription(`${emojijson.si} El usuario ha sido expulsado correctamente de el canal de voz.`)
    .setColor(`GREEN`)
    message.channel.send(ggez)
    }
  }