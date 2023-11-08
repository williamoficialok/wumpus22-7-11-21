const axios = require('axios');
const Discord = require("discord.js");
const fetch = require("node-fetch")

module.exports = {
    nombre: "banner",
    alias: [],
    run: async (client, message, args) => {

  const user = message.mentions.users.first() || client.users.cache.get(args[0]) || message.author; 
      
  const nomention = new Discord.MessageEmbed()
  .setDescription(`${client.lang.nomention}`)
  .setColor("RED")
    if (!user) return message.channel.send(nomention)
    
    const res = await fetch(`https://cryptons.ga/api/v1/userbanner?id=${user.id}`)
    
    const json = res.json()
    
    const nohavef = new Discord.MessageEmbed()
    .setDescription(`${client.lang.banner_donthave}`)
    .setColor("RED")
    if(json.url === "null") return message.channel.send(nohavef)

    axios.get(`https://cryptons.ga/api/v1/userbanner?id=${user.id}`)
        .then(function(response) {
            const nohavef2 = new Discord.MessageEmbed()
            .setDescription(`${client.lang.banner_donthave}`)
            .setColor("RED")
        if(response.data.url === "null") return message.channel.send(nohavef2)
            const embed = new Discord.MessageEmbed()
                .setDescription(`**${client.lang.banner_from} ${user}**`)
                .setImage(response.data.url)
                .setColor('RANDOM')
            message.channel.send(embed);
        });

    }
    }