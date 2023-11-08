const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "dontaffect",
    alias: ["noafectara", "no-afectara"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Affect().getImage(avatar)

        let dontaffect = new Discord.MessageAttachment(img, "wb_dontaffect.png");;
        message.channel.send(dontaffect)
    }
};