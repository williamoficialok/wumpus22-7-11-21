const Discord = require("discord.js")

module.exports = async (text, channel) => {
    let embed = new Discord.MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    await channel.send(embed)
}
