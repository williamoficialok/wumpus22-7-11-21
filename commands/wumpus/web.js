const Discord = require('discord.js');

module.exports = {
  nombre: "web",
  alias: ["pagina"],
  description: "Página web de Wumpus",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>web\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
        .setDescription(`🎈 [Web](https://wumpusgamer.ml)`)
        .setColor('RANDOM')
message.channel.send(embed); 
}

  }