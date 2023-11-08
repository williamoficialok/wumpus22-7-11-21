const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "frame",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Poutine().getImage(avatar)

        let frame = new Discord.MessageAttachment(img, "wb_frame.png");;
        message.channel.send(frame)
    }
};