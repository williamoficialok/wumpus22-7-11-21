const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "picture",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Ad().getImage(avatar)

        let picture = new Discord.MessageAttachment(img, "wb_picture.png");;
        message.channel.send(picture)
    }
};