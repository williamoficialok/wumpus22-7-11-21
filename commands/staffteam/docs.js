const axios = require("axios");
const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "docs",
  alias: [],

  run: async (client, message, args) => {
      
    const onlystaff = new Discord.MessageEmbed()
    .setDescription(`${client.lang.onlywumpustaff}`)
    .setColor("RED")
  if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);

 const docs = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(
      args
    )}`

    axios
      .get(docs)
      .then((embed) => {
        const { data } = embed

        if (data && !data.error) {
          message.channel.send({ embed: data })
        } else {
          message.channel.send('Lo siento, No encontre resultados de la busqueda.')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  }
}