const Discord = require("discord.js"); 

module.exports = {
    nombre: "emojisay",
    alias: ["esay", "embdsay"],
    run: async (client, message, args) => {

        const embderr = new Discord.MessageEmbed()
        .setDescription(`${client.lang.embedsay_notxt}`)
        .setColor("RED")

        if (!args[0]) return message.channel.send(embderr)

        let userargs = args.join(" ").split("+");
    
        let title = userargs[0];
    
        let desc = userargs.slice(1).join(" ")
    
        
        const containspam = new Discord.MessageEmbed()
        .setDescription(`${client.lang.embedsay_containspam}`)
        .setColor("RED")

          if (title.match(new RegExp(`http`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`www`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`.com`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`.cl`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`.ru`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`.es`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }
          
          if (title.match(new RegExp(`.ml`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`.tk`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`.cf`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }
          if (title.match(new RegExp(`Join`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

          if (title.match(new RegExp(`25565`)) && !message.member.hasPermission("ADMINISTRATOR")) {
            message.channel.send(containspam)
              .then(msg => msg.delete({ timeout: 10000 }))
              .catch(e => {
                return;
              });
            return;
          }

        const done = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle(title ? title : "")
        .setDescription(desc ? desc : "")
        message.channel.send(done, {disableMentions: "everyone"})
    }
}