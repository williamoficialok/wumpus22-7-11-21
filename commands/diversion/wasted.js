const srod = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  nombre: "wasted",
  alias: [],
  run: async (client, message, args) => {
    
    const usr = message.mentions.members.first() || message.member;
    const getwasted = await srod.Wasted({ Image: usr.user.displayAvatarURL({ format: "png" }) });

    message.channel.send(getwasted);
  }
};