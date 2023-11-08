const Discord = require('discord.js');

module.exports = {
  nombre: "support",
  alias: ["supportserver", "discord"],
  description: "Comando de soporte",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>support\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {
      message.delete()
      message.channel.send(`✨ Servidor de soporte || https://discord.gg/55x8P5cGsH ||`)

  }
}