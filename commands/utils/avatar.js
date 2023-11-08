const Discord = require("discord.js");

module.exports = {
    nombre: "avatar",
    alias: [],
    run: async (client, message, args) => {
        
  const member = message.mentions.members.first() || message.guild.members.resolve(args[0]) || message.guild.members.cache.find(m => m.user.username.toLowerCase() == args[0])

  if(!member){           
const msgauthor = new Discord.MessageEmbed()
  .setDescription(`${client.lang.avatar_from} ${message.author}`)
  .setImage(message.author.displayAvatarURL({dynamic: true, size: 1024 }))
  .setColor(`RANDOM`)
  return message.channel.send(msgauthor)
  }

 const avatar = new Discord.MessageEmbed()
    .setDescription(`${client.lang.avatar_from} ${member}`)
    .setImage(member.user.displayAvatarURL({dynamic: true, size: 1024 }))
    .setColor("RANDOM")
    message.channel.send(avatar)
    }
}