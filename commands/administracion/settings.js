const db = require("quick.db"); 
const Discord = require("discord.js"); 

module.exports = {
    nombre: "settings",
    alias: ["panel", "configs", "configuraciones", "configuracion", "configurations"],
    run: async (client, message, args) => {

        const getlang = await db.fetch(`setlang_${message.guild.id}`)
        const server = message.guild; 

        const embed = new Discord.MessageEmbed()
        .setTitle(`${client.lang.setts_configof} ${server}`)
        .setDescription(`
        **${client.lang.language}** ${getlang}
        **Wumpus Gold** No
        `)
        .setColor("RANDOM")
        .setThumbnail(server.iconURL())
        message.channel.send(embed)
    }
}