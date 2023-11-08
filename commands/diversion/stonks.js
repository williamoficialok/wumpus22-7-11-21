const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "stonks",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Stonk().getImage(avatar)

        let stonks = new Discord.MessageAttachment(img, "wb_stonks.png");;
        message.channel.send(stonks)
    }
};