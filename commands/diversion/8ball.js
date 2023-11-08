const Discord = require("discord.js");

module.exports = {
	nombre: "8ball",
	alias: ["8b", "azar"],
	run: async (client, message, args) => {

		let mensaje = args.slice().join(" ")
		const noquestion = new Discord.MessageEmbed()
			.setDescription(`${client.lang.ochoball_noquestion}`)
			.setColor('RED')
		if (!mensaje) return message.channel.send(noquestion);

		const ball = new Discord.MessageEmbed()
			.addField(`${client.lang.ochoball_uquestion}`, `${mensaje}`)
			.addField(`${client.lang.ochoball_myreply}`, `${client.lang.ochoball_replys}`)
			.setColor("RANDOM")

		message.channel.send(ball)
	}
}
