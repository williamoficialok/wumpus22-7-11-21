const Discord = require('discord.js');

module.exports = {
  nombre: "bug",
  alias: ["reportbug", "report-bug", "but-report"],
  description: "Reporta un bug.",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>bug <bug>\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {

    const reporte = args.join(" ")

    const noreport = new Discord.MessageEmbed()
    .setDescription(`${client.lang.bug_wahtis}`)
    .setColor(`RED`)
    if(!reporte) return message.channel.send(noreport)

    const embed = new Discord.MessageEmbed()
    .setTitle("**Wumpus Gamer | Bugs**")
    .setDescription(`El usuario **${message.author.username}** Reporto un bug desde el servidor **${message.guild.name}**\n\n**bug:**\n\n**${reporte}**`)
    .setColor("RANDOM")

    client.channels.cache.get('840601848716197905').send(embed)

    const done = new Discord.MessageEmbed()
    .setDescription(`${client.lang.bug_done}`)
    .setColor(`GREEN`)
message.channel.send(done)
    }
  }