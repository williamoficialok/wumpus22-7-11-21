const Discord = require('discord.js');

module.exports = {
  nombre: "skin",
  alias: ["minecraftskin", "mc-skin", "skin-mc"],

  run: async (client, message, args) => {
   
    const name = args.join(" "); 

    const noname = new Discord.MessageEmbed()
    .setDescription(`${client.lang.skin_notsayname}`)
    .setColor("RED")
    if (!name) return message.channel.send(noname);

  const embed = new Discord.MessageEmbed()
      .setAuthor(message.author.username,`${message.author.displayAvatarURL()}`)
      .setColor("RANDOM")
      .setImage(`https://mc-heads.net/body/${name}/100.png`)
      .setDescription(`${client.lang.skin_of} ${name}`)
      message.channel.send(embed);
  }
}
