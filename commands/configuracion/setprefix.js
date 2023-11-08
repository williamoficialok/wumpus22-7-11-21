const Schema = require('../../models/setprefix.js')
const Discord = require('discord.js')
/*SOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOON XD*/
module.exports = {
    nombre: "prefix",
    alias: ["sp"],
    run: async (client, message, args) => {

        const nameargs = args.join(" ");

        const dontespcify = new Discord.MessageEmbed()
      .setDescription(`${client.lang.setn_needname}`)
      .setColor("RED")
        if(!nameargs) return message.channel.send(dontespcify)

        const servidor = message.guild.id;
        Schema.findOne({ server: servidor }, async(err, dbdata) => { //Buscamos en la db un dato, en este caso user, que es el autor del mensaje, y nos referimos a ella como dbdata, el "err" es necesario, no sé por que, pero se debe poner
            
          if(dbdata) { //Abrimos llave, Si se puede ejecutar el comando.
              dbdata.server = servidor; //Esto sera el nombre con el que se guarda, debemos hacer un model para especificar que es.
              dbdata.prefixdb = nameargs;
              dbdata.save(); //Guardamos en la db.
            } //Cerramos la llave el if 

             else { //Abrimos llave, & SI no existe, lo creamos
              new Schema({ //Creamos el nuevo schema
                server: servidor, //Guardamos User como el la id del autor de lmensaje
                prefixdb: nameargs, //Guardamos Nombre como la variable antes definida (nameargs = args[0])
              }).save(); //Finalemente, guardamos, y cerramos la llave del new Schema
            } //Cerramos la llave del else
            
          }) //Cerramos la llave del donde buscamos datos y nos referimos a ella como dbdata.

          const yeah = new Discord.MessageEmbed()
          .setDescription(`Prefix ${nameargs}`)
          .setColor("GREEN")

          message.channel.send(yeah)
        
        } //Cerramos la llave del run.
    } //Cerramos la llave de exportación de modúlos.
