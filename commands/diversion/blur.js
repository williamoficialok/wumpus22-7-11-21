const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "blur",
    alias: ["fullhd"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Blur().getImage(avatar)

        let blur = new Discord.MessageAttachment(img, "wb_blur.png");;
        message.channel.send(blur)
    }
};