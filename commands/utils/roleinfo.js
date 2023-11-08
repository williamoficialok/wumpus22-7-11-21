const fetch = require("node-fetch");
const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "roleinfo",
  alias: [],

  run: async (client, message, args) => {
 
        let role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]) || message.guild.roles.cache.find(r => r.name.toLowerCase() === args.join(' ').toLocaleLowerCase());
        const nomentionrole2 = new Discord.MessageEmbed()
        .setDescription(`${client.lang.roleinfo_nomention}`)
        .setColor(`RED`)
        if (!role) return message.channel.send(nomentionrole2)

        const status = {
            false: "No",
            true: "Yes"
        }

        let embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${client.lang.roleinfo_information} ${role.name}`)
            .setThumbnail(message.guild.iconURL())
            .addField(`${client.lang.roleinfo_id}`, `\`${role.id}\``, true)
            .addField(`${client.lang.roleinfo_name}`, role.name, true)
            .addField(`${client.lang.roleinfo_hex_color}`, role.hexColor, true)
            .addField(`${client.lang.roleinfo_in_members}`, role.members.size, true)
            .addField(`${client.lang.roleinfo_position}`, role.position, true)
            .addField(`${client.lang.roleinfo_mentionable}`, status[role.mentionable], true)

        message.channel.send(embed);
    }
}