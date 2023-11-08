const Discord = require('discord.js')

module.exports = {
  nombre: "ping",
  alias: ["ping"],
  description: "Ping del bot.",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>ping\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {

    let values = {
      "high": 300,
      "medium": 150,
      "low": 50
  }

  let ping = await Math.round(client.ws.ping);

  let color;
    if (ping > values.high) {
      color = '🔴'
  } else if (ping > values.medium) {
      color = '🟡'
  } else {
      color = '🟢'
  }

  let colores;
    if (ping > values.high) {
      colores = '0xff0000'
  } else if (ping > values.medium) {
      colores = '0xffff00'
  } else {
      colores = '0x008f39'
  }

  let embed = new Discord.MessageEmbed()
  .setColor(colores)
  .setTitle(`${client.lang.ping_is} ${ping} ${color}`)
  
  message.channel.send(embed)
}
  }