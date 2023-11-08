const fetch = require("node-fetch");
const Discord = require("discord.js");

module.exports = {
  nombre: "changemymind",
  alias: ["cmm", "cmym"],
  run: async (client, message, args) => {

    const text = args.join(" ");

    const notext = new Discord.MessageEmbed()
    .setDescription(`${client.lang.cmym_noprivdetxt}`)
    .setColor("RED")
    if (!text) return message.channel.send(notext);

    const loadembed = new Discord.MessageEmbed()
    .setDescription(`${client.lang.cmym_loading}`)
    .setColor("BLUE")

    const loading = await message.channel.send(loadembed)

    const data = await fetch(`https://nekobot.xyz/api/imagegen?type=changemymind&text=${text}`).then((res) => res.json());
loading.delete()
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setImage(data.message)

    message.channel.send(embed);
  }
};
