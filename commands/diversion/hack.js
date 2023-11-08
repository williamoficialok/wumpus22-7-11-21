const { MessageEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    nombre: "hack",
    alias: [],
    run: async (client, message, args) => {

        const nomention = new Discord.MessageEmbed()
        .setDescription(`${client.lang.nomention}`)
        .setColor(`RED`)
     
  if(!message.mentions.users.first()) return message.channel.send(nomention)

        let nombres = ["Pepito", "Messi", "Benito Camela", "Calvin Clein", "Elba Zurita", "Jorge Nitales", "Elon Tek", "Juan Baeza", "Kazu Capunta", "Elsa Pito", "Aquiles Bailo", "Aquiles Gozo", "Alma Marcela Gozo", "Elba Lazo", "Debora Melo", "Alan Brito","Dolores Delano", "Elsa Bado", "Elver Galinda"]
        let ips = ["275.187.198.28", "985.247.637.47", "104.44.14.21.32", "168.168.100.1", "82.224.23.233"]
        let correos = ["LeoMesirve@gmail.com", "Calvincleins23@gmail.com", "Pepitohacker23212@gmail.com", "AquiLesBailo174@gmail.com", "invalided-user@gmail.com", "labailarina777@gmail.com"]
        let contraseñas = ["ImMessi", "Benito", "Pepito_hot", "SoyPro12", "ChupaElperro", "salmon", "CambieseaMovistarMiPana", "teodioMovistar"]

        message.channel.send('Obteniendo datos del usuario....').then(msg => {
            setTimeout(async () => { 
                await msg.edit('Obteniendo nombre...')
            }, 2000)
            setTimeout(async () => { 
                await msg.edit('Obteniendo dirección IPV4...')
            }, 4000)
            setTimeout(async () => { 
                await msg.edit('Obteniendo Correo...')
            }, 6000)
            setTimeout(async () => { 
                await msg.edit('Obteniendo Contraseña...')
            }, 8000)
            setTimeout(async () => { 
                await msg.edit(`Hackeo completado ${emojijson.si}`)
            }, 10000)

            const embed = new Discord.MessageEmbed()
            .addField(`**Hacker**`, `${message.author}`) 
            .addField("**Nombre**", nombres[Math.floor(Math.random() * nombres.length)]) 
            .addField("**Dirección IPV4**", ips[Math.floor(Math.random() * ips.length)])
            .addField("**Correo**", correos[Math.floor(Math.random() * correos.length)])
            .addField("**Contraseña**", contraseñas[Math.floor(Math.random() * contraseñas.length)])
            .setColor("RANDOM")

            setTimeout(async () => { 
                await msg.edit(embed)
            }, 10000)
        });
  
    }
}