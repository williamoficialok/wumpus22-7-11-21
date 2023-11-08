const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "hitler",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Hitler().getImage(avatar)

        let hitler = new Discord.MessageAttachment(img, "wb_hitler.png");;
        message.channel.send(hitler)
    }
};