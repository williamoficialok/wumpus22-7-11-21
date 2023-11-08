const Discord = require('discord.js');

module.exports = {
  nombre: "embed",
  alias: ["ellanoteamara"],

  run: async (client, message, args) => {

  const embed = new Discord.MessageEmbed()
        .setTitle(`${client.lang.embed_if}`)
        .setColor('RED')
        .setFooter(`${client.lang.embed_footer}`, message.author.displayAvatarURL({format: "png"}));
message.channel.send(embed); 
}

  }