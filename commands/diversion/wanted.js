const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "wanted",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        const price = "1";

        let img = await new DIG.Wanted().getImage(avatar, price)

        let wanted = new Discord.MessageAttachment(img, "wb_wanted.png");
        message.channel.send(wanted)
    }
};
