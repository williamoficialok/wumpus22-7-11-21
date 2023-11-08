const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "jail",
    alias: ["jaula", "carcel"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Jail().getImage(avatar)

        let jail = new Discord.MessageAttachment(img, "wb_jail.png");;
        message.channel.send(jail)
    }
};