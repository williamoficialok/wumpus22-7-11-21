const Discord = require("discord.js");
const ms = require("ms"); 
module.exports = {
  nombre: "start",
  alias: ["gws"],

  run: async (client, message, args) => {

    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
    const noperms = new Discord.MessageEmbed()
    .setDescription(`${client.lang.usernopermissions}`)
    .setColor(`RED`)
        return message.channel.send(noperms);
    }

    let giveawayChannel = message.mentions.channels.first();
    if(!giveawayChannel){
        const channelnotfound = new Discord.MessageEmbed()
        .setDescription(`${client.lang.start_chnotfound}\n ${client.lang.start_usage} \`w!start <${client.lang.start_channel}> <${client.lang.start_time}> <${client.lang.start_winners}> <${client.lang.start_giveaway}>\``)
        .setColor(`RED`)
        return message.channel.send(channelnotfound);
    }
  

   	let giveawayDuration = args[1];
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        const novalidtime = new Discord.MessageEmbed()
        .setDescription(`${client.lang.start_notime}\n ${client.lang.usage} \`w!start <${client.lang.start_channel}> <${client.lang.start_time}> <${client.lang.start_winners}> <${client.lang.start_giveaway}>\``)
        .setColor(`RED`)
        return message.channel.send(novalidtime);
    }

    let giveawayNumberWinners = args[2];
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        const nowinnersespecifed = new Discord.MessageEmbed()
        .setDescription(`${client.lang.start_nowinners}\n ${client.lang.usage} \`w!start <${client.lang.start_channel}> <${client.lang.start_time}> <${client.lang.start_winners}> <${client.lang.start_giveaway}>\``)
        .setColor(`RED`)
        return message.channel.send(nowinnersespecifed);
    }

    let giveawayPrize = args.slice(3).join(' ');
    if(!giveawayPrize){
        const nogiftsay = new Discord.MessageEmbed()
        .setDescription(`${client.lang.start_nogiveaway}\n ${client.lang.usage} \`w!start <${client.lang.start_channel}> <${client.lang.start_time}> <${client.lang.start_winners}> <${client.lang.start_giveaway}>\``)
        .setColor(`RED`)
        return message.channel.send(nogiftsay);
    }

    client.giveawaysManager.start(giveawayChannel, {
        time: ms(giveawayDuration),
        prize: giveawayPrize,
        winnerCount: parseInt(giveawayNumberWinners),
       hostedBy: client.config.hostedBy ? message.author : null,
        messages: {
            giveaway: (client.config.everyoneMention ? `ㅤ` : "ㅤ"),
            giveawayEnded: (client.config.everyoneMention ? `:tada:` : "")+`Sorteo terminado :tada:`,
            timeRemaining: `${client.lang.start_lack} **{duration}**`,
            inviteToParticipate: `${client.lang.start_react}`,
            winMessage: `${client.lang.start_congrulations} {winners} ${client.lang.start_win} **{prize}**!`,
            embedFooter: "Wumpus Gamer",
            noWinner: `${client.lang.start_nobody}`,
           hostedBy: `${client.lang.start_hostedby} {user}`,
            winners: `${client.lang.start_winners}`,
            endedAt: `${client.lang.start_finished}`,
            units: {
                seconds: `${client.lang.start_seconds}`,
                minutes: `${client.lang.start_minutes}`,
                hours: `${client.lang.start_hours}`,
                days: `${client.lang.start_days}`,
                pluralS: false
            }
        }
    })

    const done = new Discord.MessageEmbed()
    .setDescription(`${client.lang.start_started} **${giveawayPrize}** ${client.lang.start_in} ${giveawayChannel}`)
    .setColor(`GREEN`)

    message.channel.send(done);

}
}