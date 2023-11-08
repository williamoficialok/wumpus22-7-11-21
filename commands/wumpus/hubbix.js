module.exports = {
    nombre: "hubbix",
    alias: ["Hotel", "hotel", "hubbix-hotel"],
    run: async (client, message, args) => {

        const { MessageEmbed } = require("discord.js"); 

        const x = new MessageEmbed()
        .setDescription(`${client.lang.hubbix}`)
        .setColor("RANDOM")
        message.reply(x)
    }
}