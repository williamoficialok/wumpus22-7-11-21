const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const backup = require("discord-backup");
const { bcpi_information } = require('../../lenguages/en');
backup.setStorageFolder(__dirname+"/backups/");

module.exports = {
  nombre: "backupinfo",
  alias: ["bi", "backup-info"],
  run: async (client, message, args) => {

        let backupID = args[0];
        const nomentionid = new Discord.MessageEmbed()
        .setDescription(`${client.lang.bcpi_noprovideid}`)
        .setColor(`RED`)
        if(!backupID) return message.channel.send(nomentionid);

        backup.fetch(backupID).then((backupInfos) => {
            const date = new Date(backupInfos.data.createdTimestamp);
            const yyyy = date.getFullYear().toString(), mm = (date.getMonth()+1).toString(), dd = date.getDate().toString();
            const formatedDate = `${yyyy}/${(mm[1]?mm:"0"+mm[0])}/${(dd[1]?dd:"0"+dd[0])}`;
            let embed = new Discord.MessageEmbed()
               // .setAuthor(`Informaciónn del backup`)
                .addField(`${client.lang.bcpi_information}`, backupInfos.id, false)
                .addField(`${client.lang.bcpi_size}`, `${backupInfos.size} mb`, false)
                .addField(`${client.lang.bcpi_createdat}`, formatedDate, false)
                .setColor("RANDOM");
            message.channel.send(embed);
        }).catch((err) => {
            const error = new Discord.MessageEmbed()
            .setDescription(`${client.lang.bcpi_notfound}`)
            .setColor(`RED`)
            return message.channel.send(error);
        }); //;-;

    }
}