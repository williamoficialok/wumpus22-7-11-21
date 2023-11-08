const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "triggered",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Triggered().getImage(avatar)

        let triggered = new Discord.MessageAttachment(img, "wb_triggered.gif");;
        message.channel.send(triggered)
    }
};