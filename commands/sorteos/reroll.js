const Discord = require("discord.js");

module.exports = {
  nombre: "reroll",
  alias: ["greroll"],
  run: async (client, message, args) => {

    if (!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {

        const noperms = new Discord.MessageEmbed()
        .setDescription(`${client.lang.usernopermissions}`)
        .setColor(`RED`)
        return message.channel.send(noperms);
    }

    if (!args[0]) {
        const notfound = new Discord.MessageEmbed()
        .setDescription(`${client.lang.reroll_noprovideid}`)
        .setColor(`RED`)
        return message.channel.send(notfound);
    }

    let giveaway = 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if(!giveaway){
        const notfound2 = new Discord.MessageEmbed()
        .setDescription(`${client.lang.reroll_notfound}`)
        .setColor(`RED`)
        return message.channel.send(notfound2);
    }

    client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        const done = new Discord.MessageEmbed()
        .setDescription(`${client.lang.reroll_done}`)
        .setColor(`GREEN`)
        message.channel.send(done)
    })
    .catch((e) => {
        if(e.startsWith(`${client.lang.reroll_idk} ${giveaway.messageID} ${client.lang.reroll_idk}`)){
            message.channel.send(`${client.lang.reroll_idk}`);
        } else {
            console.error(e);
            const err = new Discord.MessageEmbed()
            .setDescription(`${client.lang.error}\n${e}.`)
            .setColor("RED")
            message.channel.send(err);
        }
    })

}
}
