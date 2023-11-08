const Discord = require('discord.js');
const { poll } = require('discord.js-poll');

module.exports = {
    name: "poll",
    alias: ["encuesta", "enquesta"],
    run: async (client, message, args) => {

        const dontyype = new Discord.MessageEmbed()
        .setDescription(`${client.lang.poll_nopollsay}`)
        .setColor("RED")
        if (!args[0]) return message.channel.send(dontyype);

       poll(message, args, '+', '#00D1CD')

}
}