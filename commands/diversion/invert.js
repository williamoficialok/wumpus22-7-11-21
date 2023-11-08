const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "invert",
    alias: ["invertir"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Invert().getImage(avatar)

        let inviried = new Discord.MessageAttachment(img, "wb_invirted.png");;
        message.channel.send(inviried)
    }
};