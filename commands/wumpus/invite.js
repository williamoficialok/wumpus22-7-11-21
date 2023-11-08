const Discord = require("discord.js");

module.exports = {
  nombre: "invite",
  alias: ["inv", "inviteme", "invite-me"],
  description: "Invitación del bot.",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>invite\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {
    
  const invite = new Discord.MessageEmbed()
        .setTitle(`${client.lang.invite_title}`)
        .setDescription(`🎈 ${client.lang.invite_add}\n[${client.lang.invite_click}](https://discord.com/api/oauth2/authorize?client_id=829721945921814548&permissions=8&scope=bot)`)
        .setColor("RANDOM")

    message.channel.send(invite);
}
  }