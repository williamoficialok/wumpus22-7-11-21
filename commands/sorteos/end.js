const Discord = require("discord.js");

module.exports = {
  nombre: "end",
  alias: ["gwe"],
  run: async (client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES") && !message.member.roles.cache.some((r) => r.name === "Giveaways")) {
        const noperms = new Discord.MessageEmbed()
        .setDescription(`${client.lang.usernopermissions}`)
        .setColor(`RED`)
        return message.channel.send(noperms);
    }

    if (!args[0]) {
        const noresult = new Discord.MessageEmbed()
        .setDescription(`${client.lang.end_noptivideid}`)
        .setColor(`RED`)
        return message.channel.send(noresult);
    }

    let giveaway = client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) || client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

    if (!giveaway) {
        const noperms = new Discord.MessageEmbed()
        .setDescription(`${client.lang.end_notfound}`)
        .setColor(`RED`)
        return message.channel.send(notfound);
    }
    client.giveawaysManager.edit(giveaway.messageID, {
        setEndTimestamp: Date.now()
    })
    .then(() => {
        const nose = new Discord.MessageEmbed()
        .setDescription(`${client.lang.ok}` + (client.giveawaysManager.options.updateCountdownEvery/1000) + `${end_seconds}`)
                .setColor(`RED`)
        message.channel.send(nose);
    })
    .catch((e) => {
        const idk = new Discord.MessageEmbed()
        .setDescription(`${client.lang.end_alreadyend} ${giveaway.messageID} ${client.lang.end_over}`)
        .setColor(`RED`)
        if (e.startsWith(idk)) {
          
            const idk2 = new Discord.MessageEmbed()
        .setDescription(`${client.lang.end_ok} ${giveaway.messageID} ${client.lang.end_finished}`)
        .setColor(`RED`)
            message.channel.send(idk2);

        } else {
            console.error(e);
        }
    })

}
}