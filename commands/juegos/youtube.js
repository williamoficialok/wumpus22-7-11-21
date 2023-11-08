const Discord = require("discord.js");

module.exports = {
    nombre: "youtube",
    alias: ["youtubetogether", "youtube-together", "together-youtube", "yt-together", "together-yt"],
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
    client.discordTogether.createTogetherCode(message.member.voice.channelID, 'youtube').then(async invite => {
        return message.channel.send(`${client.lang.clickinthelink}\n${invite.code}`);    
}); 
}


}
}