const megdb = require("megadb");
const Discord = require("discord.js");
const suggerencia = new megdb.crearDB("canalsugerencias");

module.exports = {
    nombre: "suggest",
    alias: ["sugerencia"],
  
    run: async (client, message, args) => {

        const canal = await suggerencia.obtener(`${message.guild.id}`, `${message.channel.id}`)
        const getcanal = client.channels.cache.get(canal)
        const nochnnel = new Discord.MessageEmbed()
        .setDescription(`${client.lang.suggest_noconfigured}`)
        .setColor("RED")
        if (!getcanal) return message.channel.send(nochnnel)
        const sugarg = args.join(" ")

        const nosay = new Discord.MessageEmbed()
        .setDescription(`${client.lang.suggest_noprovide}`)
        .setColor("RED")
        if (!sugarg) return message.channel.send(nosay)
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`${client.lang.suggest_send}`)
        .setColor(`GREEN`)
        message.channel.send(embed)

        const suggstggez = new Discord.MessageEmbed()
        .setAuthor(message.author.username, message.author.avatarURL)
        .setDescription(`**${client.lang.suggest_new}**
        ${sugarg}`)
        .setColor("RANDOM")
        getcanal.send(suggstggez).then(async xs => { 
xs.react("⬆️")
xs.react("⬇️")
    });

    }
}