const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');

module.exports ={
    nombre: "finduser",
    alias: [],
    run: async (client, message, args) => { 

      const nosayname = new Discord.MessageEmbed()
      .setDescription(`${client.lang.finduser_noprovidename}`)
      .setColor("RED")
        if(!args.length) return message.channel.send(nosayname);
        
        const notfound = new Discord.MessageEmbed()
        .setDescription(`${client.lang.finduser_notfound}`)
        const searchMember = message.guild.members.cache.find(member => member.user.tag.toLowerCase().includes(args[0].toLowerCase())) || message.mentions.users.first();

        if (!searchMember) return message.channel.send(notfound, {
            allowedMentions: {
              parse: []
            }
          });
          
        const user = searchMember.user || message.mentions.users.first();
        message.channel.send(`${user}`, {
            allowedMentions: {
              parse: []
            }
          });
    }
}