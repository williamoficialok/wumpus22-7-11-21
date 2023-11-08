const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "circle",
    alias: ["circulo"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Circle().getImage(avatar)

        let circle = new Discord.MessageAttachment(img, "wb_circle.png");;
        message.channel.send(circle)
    }
};