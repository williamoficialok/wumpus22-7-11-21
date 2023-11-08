const Discord = require("discord.js");

module.exports = {
    nombre: "edit",
    alias: ["gedit"],
    
    run: async (client, message, args) => {

        let messageID = args[0]

        const noid = new Discord.MessageEmbed()
        .setDescription(`${client.lang.edit_provideid}`)
        .setColor("RED")
      if(!messageID) return message.channel.send(noid)

      let ng = args[1]
      const nowinners = new Discord.MessageEmbed()
        .setDescription(`${client.lang.edit_noprovidewinners}`)
        .setColor("RED")
      if(!ng) return message.channel.send(nowinners)

      let np = args.slice(2).join(" ")

      const nogw = new Discord.MessageEmbed()
        .setDescription(`${client.lang.edit_nogw}`)
        .setColor("RED")
      if(!np) return message.channel.send(nogw);

      client.giveawaysManager.edit(messageID, {
      newWinnerCount: parseInt(ng),
      newPrize: np
     }).then(() => {
      const nos = client.giveawaysManager.options.updateCountEvery / 1000;
    
        const ok = new Discord.MessageEmbed()
        .setDescription(`${client.lang.edit_ok}`)
        .setColor("RED")
      message.channel.send(ok)
    }); 

    }
  }
