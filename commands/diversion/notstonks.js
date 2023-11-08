const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "notstonks",
    alias: ["nostonks", "not-stonks", "no-stonks", "stonks-no", "stonks-not"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.NotStonk().getImage(avatar)

        let notstonks = new Discord.MessageAttachment(img, "wb_notstonks.png");;
        message.channel.send(notstonks)
    }
};