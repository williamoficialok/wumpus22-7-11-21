const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "beautiful",
    alias: ["bonito"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Beautiful().getImage(avatar)

        let Beautiful = new Discord.MessageAttachment(img, "wb_Beautiful.png");;
        message.channel.send(Beautiful)
    }
};