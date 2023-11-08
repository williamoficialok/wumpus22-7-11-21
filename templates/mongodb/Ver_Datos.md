const Schema = require('../../models/info.js')
const Discord = require('discord.js')
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "perfil",
  alias: ["profile"],
  run: async (client, message, args) => { 

    const user = message.mentions.users.first() || message.author; //Creamos la variable user, la usamos para buscar un dato abajo.

    Schema.findOne({ User: user.id }, async(err, dbdata) => { //Buscamos en la db un dato, en este caso user, que es el autor del mensaje/mencionado (La variable user), y nos referimos a ella como dbdata, el "err" es necesario, no sé por que, pero se debe poner

      const donthave = new Discord.MessageEmbed()
      .setDescription(`${client.lang.setn_notconfigured}`)
      .setColor("RED")
      if(!dbdata) return message.channel.send(donthave) //Si no tiene ningún dato en dbdata, retornamos este embed.

    const embed = new Discord.MessageEmbed()
    .setAuthor(`${message.author.tag}`, user.avatarURL())
    .addField(`${client.lang.setn_name} `, dbdata.Nombre)
    .setColor("RANDOM")
    message.channel.send(embed)

    }); //Cerramos la llave de donde buscamos el dato, y nos referimos a ella como dbdata

  } //Ceramos la llave del run.
} //Cerramos la llave de la exportación de modúlos.
