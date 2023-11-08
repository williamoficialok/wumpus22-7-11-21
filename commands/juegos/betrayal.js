const Discord = require("discord.js");

module.exports = {
    nombre: "berayal",
    alias: ["betrayalio", "betrayal-io"],
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
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'betrayal').then(async invite => {
        return message.channel.send(`${client.lang.clickinthelink}\n${invite.code}`);
    });    
}
}
}