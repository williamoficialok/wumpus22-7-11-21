const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "qepd",
    alias: ["f", "dead", "death", "rip", "10secondofsilent", "10-seconds-of-silent"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Rip().getImage(avatar)

        let qepd = new Discord.MessageAttachment(img, "wb_qepd.png");;
        message.channel.send(qepd)
    }
};