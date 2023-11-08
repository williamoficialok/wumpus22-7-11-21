const Discord = require("discord.js")
const DIG = require("discord-image-generation");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "spank",
    alias: [],
    run: async (client, message, args) => {

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nomention}`)
        .setColor("RED")
        if (!args[0]) return message.channel.send(nomention)
        let autor = message.author; 
        let avatarautor = autor.displayAvatarURL({ dynamic: true, format: "png" });

        let mentioned = message.mentions.users.first()
        let avatarmentioned = mentioned.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Spank().getImage(avatarautor, avatarmentioned)

        let spank = new Discord.MessageAttachment(img, "wb_spank.png");;
        message.channel.send(spank)
    }
};