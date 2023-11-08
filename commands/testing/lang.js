/* const Schema = require("../../models/language.js")
const Discord = require('discord.js')

module.exports = {
    nombre: "sdfsfdsdf",
    alias: [],
    run: async (client, message, args) => {

        const sayLang = args[0]

        const dontespcify = new Discord.MessageEmbed()
      .setDescription(`???`)
      .setColor("RED")
        if(!sayLang) return message.channel.send(dontespcify)

        const novalid = new Discord.MessageEmbed()
        .setDescription(`\`es en cat\``)
        .setColor("RED")
        if(!["es", "en", "cat"].includes(sayLang.toLowerCase())) return message.channel.send(novalid);

        Schema.findOne({ guildid: message.guild.id }, async(err, dbdata) => { //Buscamos en la db un dato, en este caso user, que es el autor del mensaje, y nos referimos a ella como dbdata, el "err" es necesario, no sé por que, pero se debe poner
            
          if(dbdata) { //Abrimos llave, Si se puede ejecutar el comando.
              dbdata.guildid = message.guild.id;
              dbdata.langdb = sayLang; //Esto sera el nombre con el que se guarda, debemos hacer un model para especificar que es.
              dbdata.save(); //Guardamos en la db.
            } //Cerramos la llave el if 

             else { //Abrimos llave, & SI no existe, lo creamos
              new Schema({ //Creamos el nuevo schema
                guildid: message.guild.id, //Guardamos User como el la id del autor de lmensaje
                langdb: sayLang, //Guardamos Nombre como la variable antes definida (nameargs = args[0])
              }).save(); //Finalemente, guardamos, y cerramos la llave del new Schema
            } //Cerramos la llave del else
            
          }) //Cerramos la llave del donde buscamos datos y nos referimos a ella como dbdata.

          const yeah = new Discord.MessageEmbed()
          .setDescription(`Lang; ${sayLang}`)
          .setColor("GREEN")

          message.channel.send(yeah)
        
        } //Cerramos la llave del run.
    } //Cerramos la llave de exportación de modúlos.

 */