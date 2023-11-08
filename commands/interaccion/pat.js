const api = require("blueapi.js");
const Discord = require("discord.js");

module.exports = {
    nombre: "pat",
    alias: ["pet"],
    run: async (clien, message, args) => {

        let image = await api.image.petpet(message.author.displayAvatarURL({ dynamic: false, format: 'png' }), { frames: 10} );

        let file = new Discord.MessageAttachment(image, "wb_pat.gif");

        message.channel.send(file);

    }
}