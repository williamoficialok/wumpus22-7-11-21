const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "batslap",
    alias: ["batmanslap", "batman-slap", "bat-slap"],
    run: async (client, message, args) => {

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${client.lang.nomention}`)
        .setColor("RED")
        if (!args[0]) return message.channel.send(nomention)
        let autor = message.author; 
        let avatarautor = autor.displayAvatarURL({ dynamic: true, format: "png" });

        let mentioned = message.mentions.users.first()
        let avatarmentioned = mentioned.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Batslap().getImage(avatarautor, avatarmentioned)

        let batslap = new Discord.MessageAttachment(img, "wb_batslap.png");;
        message.channel.send(batslap)
    }
};