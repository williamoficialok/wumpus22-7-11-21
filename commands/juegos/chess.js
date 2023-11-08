const Discord = require("discord.js");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: "chess",
    alias: ["ajedrez"],
    run: async (client, message, args) => {
        
 const { DiscordTogether } = require("discord-together");
client.discordTogether = new DiscordTogether(client); 

const membernovc = new Discord.MessageEmbed()
.setDescription(`${client.lang.membernovoicechannel}`)
.setColor(`RED`)
if (!message.member.voice.channel) {
message.channel.send(membernovc)
}

if (message.member.voice.channel) {
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'chess').then(async invite => {
        return message.channel.send(`${client.lang.clickinthelink}\n${invite.code}`);
    });    
}
}
}