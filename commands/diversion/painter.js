const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "painter",
    alias: ["pintador"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Bobross().getImage(avatar)

        let painter = new Discord.MessageAttachment(img, "wb_painter.png");;
        message.channel.send(painter)
    }
};