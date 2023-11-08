const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "sepia",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Sepia().getImage(avatar)

        let sepia = new Discord.MessageAttachment(img, "wb_sepia.png");;
        message.channel.send(sepia)
    }
};