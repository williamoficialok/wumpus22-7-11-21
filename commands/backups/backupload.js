const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");
const backup = require("discord-backup");
backup.setStorageFolder(__dirname+"/backups/");

module.exports = {
  nombre: "backupload",
  alias: ["bl", "backup-load"],
  run: async (client, message, args) => {
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${client.lang.usernopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(usernoperms)

        let backupID = args[0];
        if(!backupID){
            const nomentionid = new Discord.MessageEmbed()
            .setDescription(`${client.lang.bcpl_noprovideid}`)
            .setColor(`RED`)
            return message.channel.send(nomentionid);
        }
        const ggez = new Discord.MessageEmbed()
        .setDescription(`${client.lang.bcpl_warning}`)
        .setColor("YELLOW")
        backup.fetch(backupID).then(async () => {
            message.channel.send(ggez).then(m => {
				m.react("✅")
			const filtro = (reaction, user) => {
            return ["✅"].includes(reaction.emoji.name) && user.id == message.author.id;
            };
                m.awaitReactions(filtro, {
                    max: 1,
                    time: 20000,
                    errors: ["tiempo"]
                }).catch(() => {
                    m.edit(`${client.lang.bcpl_timeend}`);
                }).then(coleccionado=> {
				const reaccion = coleccionado.first();
                const sendautor = new Discord.MessageEmbed()
                .setDescription(`${client.lang.bcpl_loading}`)
                .setColor("GREEN")
				if(reaccion.emoji.name === "✅"){
                  
                  message.author.send(sendautor);
                  backup.load(backupID, message.guild).then(() => {
                      backup.remove(backupID);
                  }).catch((err) => {
                      return message.author.send(`${client.lang.error}`); //No embed ;-;
                  });
        };
				})
			})
    }); 

    }
}