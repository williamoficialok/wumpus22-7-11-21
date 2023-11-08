const Discord = require("discord.js")
const DIG = require("discord-image-generation");

module.exports = {
    nombre: "deleteimage",
    alias: ["eliminarimagen", "eliminar-imagen", "imagen-eliminar"],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        let img = await new DIG.Delete().getImage(avatar)

        let deleteimage = new Discord.MessageAttachment(img, "wb_deleteimage.png");;
        message.channel.send(deleteimage)
    }
};