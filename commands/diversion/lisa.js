const Discord = require("discord.js")
const DIG = require("discord-image-generation");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "lisa",
    alias: [],
    run: async (client, message, args) => {

        let usr = message.mentions.users.first() || message.author; 
        let avatar = usr.displayAvatarURL({ dynamic: true, format: "png" });

        const text = args[0];

        const notext = new Discord.MessageEmbed()
        .setDescription(`${client.lang.lisa_noprovidetxt}`)
        .setColor("RED")
if (!text) return message.channel.send(notext)

        let img = await new DIG.LisaPresentation().getImage(text)

        let lisa = new Discord.MessageAttachment(img, "wb_lisa.png");;
        message.channel.send(lisa)
    }
};