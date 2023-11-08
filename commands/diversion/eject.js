const Discord = require('discord.js')
const fetch = require('node-fetch')

module.exports = {
  nombre: "eject",
  alias: ["expulsar"],

  run: async (client, message, args) => {
      
    const user = message.mentions.users.first()
    const imp = [true, false];
    const imposter = imp[Math.floor(Math.random() * imp.length)];
    const crew = ["white", "blue", "brown", "cyan", "green", "lime", "orange", "pink", "purple", "red", "yellow"] //No spanish ;-;
    const crewmate = crew[Math.floor(Math.random() * crew.length)];
    
    if(!user) {
      const nomention = new Discord.MessageEmbed()
      .setDescription(`${client.lang.nomention}`)
      .setColor(`RED`)
      return message.channel.send(nomention)
    }
    
    const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
    
    const done = new Discord.MessageEmbed()
      .setTitle(`${message.author.username} ${client.lang.eject_expulsedto} ${user.username}`)
      .setColor("RANDOM")
      .setDescription(`[${client.lang.eject_ifnotseen}](https://www.youtube.com/watch?v=dQw4w9WgXcQ)`)
      .setImage(`${data.url}`)

    message.channel.send(done);
  }
}
