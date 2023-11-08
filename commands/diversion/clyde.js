const fetch = require("node-fetch");
const Discord = require('discord.js');
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "clyde",
  alias: ["msgclyde"],

  run: async (client, message, args) => {
      
    const text = args.join(" ");
    const notext = new Discord.MessageEmbed()
    .setDescription(`${client.lang.clyde_noprovidetxt}`) 
    .setColor(`RED`)
    if (!text) return message.channel.send(notext);

    const data = await fetch(`https://nekobot.xyz/api/imagegen?type=clyde&text=${text}`).then((res) => res.json());

    const clydexd = new Discord.MessageEmbed()
      .setTitle(`Quote - Clyde ${emojijson.clyde}`)
      .setImage(data.message)
      .setColor("RANDOM")

    message.channel.send(clydexd);
  },
};