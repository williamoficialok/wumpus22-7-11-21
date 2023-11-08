const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "egg",
    alias: ["huevo", "huevos", "webos"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Mms().getImage(avatar)

        let egg = new Discord.MessageAttachment(img, "wb_egg.png");;
        message.channel.send(egg)
    }
};