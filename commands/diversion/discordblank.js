const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "discordblank",
    alias: ["discord-blanco", "discordblanco"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.DiscordBlack().getImage(avatar)

        let discordblank = new Discord.MessageAttachment(img, "wb_discordblank.png");;
        message.channel.send(discordblank)
    }
};