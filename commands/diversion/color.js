const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "color",
    alias: ["hexcolor"],
    run: async (client, message, args) => {

        const colorhex = args[0]; 

        const nocolorsay = new Discord.MessageEmbed()
        .setDescription(`${client.lang.color_notsay}`)
        .setColor("RED")
        if (!colorhex) return message.channel.send(nocolorsay);


        let img = await new DIG.Color().getImage(colorhex)

        let color = new Discord.MessageAttachment(img, "colorhex.png");

        message.channel.send(color)
    }
};