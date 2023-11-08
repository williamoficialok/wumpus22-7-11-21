const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "discordblue",
    alias: ["discord-azul", "discordazul"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.DiscordBlue().getImage(avatar)

        let discordblue = new Discord.MessageAttachment(img, "wb_discordblue.png");;
        message.channel.send(discordblue)
    }
};