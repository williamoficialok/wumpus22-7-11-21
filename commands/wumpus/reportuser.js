const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "reportuser",
  alias: ["reportarusuario", "report-user"],
  description: "Reporta a un usuario que este imcumpliendo las reglas del bot u dando mal uso al bot.",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>reportuser <usuario> <id del usuario> <razón> <prueba> <prueba2>(opcional) <prueba3>(opcional)\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {

    const usuario = args[0]
    const nouser = new Discord.MessageEmbed()
    .setDescription(`${client.lang.reportuser_usage}`)
    .setColor(`RED`)
    if(!usuario) return message.channel.send(nouser)


    const usuarioid = args[1]
    const noid = new Discord.MessageEmbed()
    .setDescription(`${client.lang.reportuser_noprovideid}`)
    .setColor("RED")
  if (!usuarioid) return message.channel.send(noid);

  const razon = args[2]
  const noreason = new Discord.MessageEmbed()
    .setDescription(`${client.lang.reportuser_noreason}`)
    .setColor("RED")
    if (!razon) return message.channel.send(noreason); 

    const pruebas = args[3]
    const nopruebas = new Discord.MessageEmbed()
    .setDescription(`${client.lang.reportuser_notests}`)
    .setColor("RED")
    if (!pruebas) return message.channel.send(nopruebas);
    
    const pruebados = args[4]
    const pruebatres = args[5]
    const pruebacuatro = args[6]

    const embed = new Discord.MessageEmbed()
    .setTitle("**Wumpus Gamer | Reporte usuarios**")
    .setThumbnail(message.author.displayAvatarURL())
    .addField(`🕵️‍♂️ Autor`, `${message.author}`)
    .addField(`:bust_in_silhouette:❯ Usuario Reportado`, `${usuario || "No proporcionado"}`)
    .addField(`:id:❯ ID`, `${usuarioid || "No proporcionado"}`)
    .addField(`:page_with_curl:❯ Razón`, `${razon || "No proporcionado"}`)
    .addField(`:link:❯ Pruebas`, `${pruebas || "Prueba no proporcionado [1]\n"}\n ${pruebados || "Prueba no proporcionado [2]\n"}\n ${pruebatres || "Prueba no proporcionado [3]\n"}\n ${pruebacuatro || "Prueba no proporcionado [4]\n"}`)
    .setColor(`RANDOM`)

    client.channels.cache.get('840601849588613140').send(embed)


    const god = new Discord.MessageEmbed()
    .setDescription(`${client.lang.reportuser_done}`)
    .setColor(`GREEN`)
message.channel.send(god)
    }
  }
