const Discord = require('discord.js');

module.exports = {
  nombre: "serverinfo",
  alias: ["infoserver"],

  run: async (client, message, args) => {

    const server = message.guild;
  const embed = new Discord.MessageEmbed()
  .setTitle(`Información de ${message.guild.name}`)
  .setThumbnail(server.iconURL())
  .setDescription(`${server.description}`)
  .addField('ID', server.id, true)
  .addField("REGIÓN", message.guild.region, true)
  .addField("OWNER DEL SERVIDOR",`${server.owner.user}`, true)
  .addField("ID DEL OWNER",`${server.ownerID}`, true)
  .addField("CANAL BOOSTS", `<#${server.systemChannelID || "0"}>`, true)
  .addField(`CANALES`, `Categorias ${server.channels.cache.filter(x => x.type === "category").size} \nTexto ${server.channels.cache.filter(x => x.type === "text").size || "0"} \nVoz ${server.channels.cache.filter(x => x.type === "voice").size || "0"}`, true)
  .addField('MIEMBROS', server.memberCount, true)
  .addField("BOTS", `${message.guild.members.cache.filter(m => m.user.bot).size}`, true)
  .addField('EMOJIS', `${message.guild.emojis.cache.size || "0"}`, true)
  .addField('BOOSTS', `${message.guild.premiumSubscriptionCount.toString() || "0"}`, true)
  .addField('NIVEL DE VERIFICACIÓN', `${server.verificationLevel || "No establecido"}`, true)
  .addField('ROLES', `${server.roles.cache.size || "0"}`, true)
  //.addField("Features", `${server.features || "No tiene"}`, true)
  .addField("CANAL AFK", `<#${server.afkChannelID || "No establecido"}>`, true)
  .addField("Lenguaje", `${server.preferredLocale || "No establecido"}`, true)
  .addField("Canal actualizaciones", `<#${server.publicUpdatesChannelID || "No establecido"}>`, true)
  .addField("CANAL DE REGLAS", `<#${server.rulesChannelID || "No establecido"}>`, true)
  .setColor("RANDOM")
  .setImage(server.banner)

 message.channel.send(embed); 
}

  }