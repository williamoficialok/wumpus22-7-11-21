const Discord = require("discord.js");
const emojijson = require("../../emojis.json");
const db = require("quick.db") 

module.exports = {
	nombre: "setlang",
    alias: ["setlanguage", "set-lang", "set-language"],
	run: async (client, message, args) => {

        const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${client.lang.usernopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)
    
        const options = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Opción invalida\nOpciones \`es\` \`en\` \`cat\``)
        .setColor("RED")
		if(!args[0]) {
			return message.channel.send(options)
		}

        const en = new Discord.MessageEmbed()
        .setDescription(`${emojijson.si} Language seted in English.`)
        .setColor("GREEN")

		if(args[0] === "en") {
			db.set(`setlang_${message.guild.id}`, "en")
			return message.channel.send(en)
		}

        const cat = new Discord.MessageEmbed()
        .setDescription(`${emojijson.si} Llenguatge Establert en Catalan.`)
        .setColor("GREEN")

		if(args[0] === "cat") {
			db.set(`setlang_${message.guild.id}`, "cat")
			return message.channel.send(cat)
		}

        const es = new Discord.MessageEmbed()
        .setDescription(`${emojijson.si} Lenguaje establecido en Español.`)
        .setColor("GREEN")

		if(args[0] === "es") {
			db.set(`setlang_${message.guild.id}`, "es")
			return message.channel.send(es)
		}
		
	}
}


/*const db = require(`megadb`)
const lenguages = new db.crearDB('setlenguage')

module.exports = {
    nombre: "setlang",
    alias: [],
    run: async (client, message, args) => {

        const argumentos = args[0];

        const noargs = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Opción invalida, sólo hay \`spanish\` \`english\``)
        .setColor("RED")
        if (!argumentos) return message.channel.send(noargs)

        const setlangembedes = new Discord.MessageEmbed()
        .setTitle(`${emojijson.si} Lenguaje establecido en español!`)
        .setColor(`GREEN`)
        if (argumentos === "spanish")
        return lenguages.eliminar(`${message.guild.id}`, `${argumentos}`) && message.channel.send(setlangembedes)
 
    const setlangembeden = new Discord.MessageEmbed()
    .setTitle(`${emojijson.si} Lenguage seted in english!`)
    .setColor("GREEN")
    if (argumentos === "english")
    return lenguages.establecer(`${message.guild.id}`, `${argumentos}`) && message.channel.send(setlangembeden)
    
    }
}*/