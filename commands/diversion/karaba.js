const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "karaba",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Karaba().getImage(avatar)

        let karaba = new Discord.MessageAttachment(img, "wb_karaba.png");;
        message.channel.send(karaba)
    }
};