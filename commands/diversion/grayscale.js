const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "grayscale",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Greyscale().getImage(avatar)

        let imagegray = new Discord.MessageAttachment(img, "wb_greyscale.png");;
        message.channel.send(imagegray)
    }
};