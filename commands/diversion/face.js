const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "face",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Facepalm().getImage(avatar)

        let face = new Discord.MessageAttachment(img, "wb_face.png");;
        message.channel.send(face)
    }
};