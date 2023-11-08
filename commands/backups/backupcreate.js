const Discord = require("discord.js");
const backup = require("discord-backup");
const { MessageEmbed } = require('discord.js');
backup.setStorageFolder(__dirname+"/backups/");

module.exports = {
  nombre: "backupcreate",
  alias: ["bc", "backup-create"],

  run: async (client, message, args) => {
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${client.lang.botnopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

        backup
          .create(message.guild, {
            jsonBeautify: true
          })
          
          .then(backupData => {

        
            message.channel.send(
              new Discord.MessageEmbed()
              .setTitle(`${client.lang.bcp_created}`)
              .setColor(`GREEN`)
              .setThumbnail(message.author.displayAvatarURL())
              .setDescription(`<@${message.author.id}> **${client.lang.bcp_lookmd}**`)
            );

            message.author.send(
              new Discord.MessageEmbed()
             .setTitle(`${client.lang.bcp_created}`)
              .setColor("GREEN")
              .setDescription(`${client.lang.bcp_guild} \`${message.guild.name}\`\n ${client.lang.bcp_toload} \`w!backupload ${backupData.id}\``)
              .setThumbnail(message.guild.iconURL())
              )

          });

    }
}