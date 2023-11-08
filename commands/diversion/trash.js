const axios = require("axios");
const Discord = require("discord.js");

module.exports = {
  nombre: "trash",
  alias: ["basura"],
  run: async (client, message, args) => {

    let user = message.mentions.members.first() || message.author;
  const url = `https://api.no-api-key.com/api/v1/trash?image=${user.displayAvatarURL(
    { format: "png" }
  )}`;

    let response, data;

      response = await axios.get(url);
      data = response.data;

    const embed = new Discord.MessageEmbed()
      .setImage(data.url)
      .setColor("RANDOM")

    message.channel.send(embed);
  }
}