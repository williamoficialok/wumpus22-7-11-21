const Discord = require('discord.js');

module.exports = {
  nombre: "allbots",
  alias: ["todoslosbots", "everthingbots", "everthing-bots"],

  run: async (client, message, args) => {
      
    const botssize = message.guild.members.cache.filter(m => m.user.bot).map(m => `<@${m.id}> \ **ID** \`${m.id}\``);
    const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`${botssize.join('\n \━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\━\ \n')}`)
    .setFooter(`${client.lang.allbots_total} ${message.guild.members.cache.filter(member => member.user.bot).size}`)
    message.channel.send(embed)
  }
}
