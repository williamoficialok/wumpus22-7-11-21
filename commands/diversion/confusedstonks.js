const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "confusedstonks",
    alias: ["stonks-confundidas"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.ConfusedStonk().getImage(avatar)

        let confusedstonks = new Discord.MessageAttachment(img, "wb_confusedstonks.png");;
        message.channel.send(confusedstonks)
    }
};