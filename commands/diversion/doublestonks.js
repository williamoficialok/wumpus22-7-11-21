const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "doublestonks",
    alias: ["doble-stonks", "stonks-dobles", "doblestonks", "stonksdobles"],
    run: async (client, message, args) => {

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${messagejson.nomention}`)
        .setColor("RED")
        if (!args[0]) return message.channel.send(nomention)
        let autor = message.author; 
        let avatarautor = autor.displayAvatarURL({ dynamic: true, format: "png" });

        let mentioned = message.mentions.users.first()
        let avatarmentioned = mentioned.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.DoubleStonk().getImage(avatarautor, avatarmentioned)

        let doublestonks = new Discord.MessageAttachment(img, "wb_doublestonks.png");
        message.channel.send(doublestonks)
    }
};