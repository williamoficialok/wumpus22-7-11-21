const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "ikiss",
    alias: ["beso", "tebeso", "te-beso"],
    run: async (client, message, args) => {

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${client.lang.nomention}`)
        .setColor("RED")
        if (!args[0]) return message.channel.send(nomention)
        let autor = message.author; 
        let avatarautor = autor.displayAvatarURL({ dynamic: true, format: "png" });

        let mentioned = message.mentions.users.first()
        let avatarmentioned = mentioned.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Kiss().getImage(avatarautor, avatarmentioned)

        let ikiss = new Discord.MessageAttachment(img, "wb_ikiss.png");;
        message.channel.send(ikiss)
    }
};