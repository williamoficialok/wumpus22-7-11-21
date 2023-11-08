const Discord = require("discord.js");


module.exports = {
        nombre: "invites",
        alias: [],
 run: async (client, message, args) => {

            let member = message.mentions.members.first() || message.member;

            let invites = await message.guild.fetchInvites()

            let memberInvites = invites.filter(i => i.inviter && i.inviter.id === member.user.id);

            if (memberInvites.size <= 0) {
                const nohavef = new Discord.MessageEmbed()
                .setDescription(`${client.lang.invites_donthave}`)
                .setColor("RED")
                return message.channel.send(nohavef, (member === message.member ? null : member));
  {}          }

            let content = memberInvites.map(i => i.code).join("\n");
            let index = 0;
            memberInvites.forEach(invite => index += invite.uses);

            let embed = new Discord.MessageEmbed()
                .setColor("RANDOM")
                .setTitle(`${message.author.tag}`)
                .setDescription(`${client.lang.invites_have} **${index}** invites. (**${index}** ${client.lang.invites_havetwo})`)
              //.addField("Codigos de invitaciones\n\n", `\`${content}\``);
            message.channel.send(embed);
        }
    }