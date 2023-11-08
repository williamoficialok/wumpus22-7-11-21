const Discord = require('discord.js')
const canvacord = require('canvacord')

module.exports = {
  nombre: "quote",
  alias: ["imitar"],

  run: async (client, message, args) => {

    let user = message.mentions.users.first()
    const nomention = new Discord.MessageEmbed()
    .setDescription(`${client.lang.nomention}`)
    .setColor(`RED`)
    if (!user) return message.channel.send(nomention)

    let msg = args.join(" ").slice(22)

    const e = user.displayAvatarURL({ format: 'png' })

    const img = await canvacord.Canvas.quote({ username: `${user.username}`, color: "#7289da", message: `${msg}`, image: e })
    let attachment = new Discord.MessageAttachment(img, "wb_quote.png");
    return message.channel.send(attachment);
  }
}