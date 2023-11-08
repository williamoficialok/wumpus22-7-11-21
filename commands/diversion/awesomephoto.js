const fetch = require("node-fetch");
const Discord = require('discord.js');

module.exports = {
  nombre: "awesomephoto",
  alias: ["amazingphoto", "foto-impresionante"],

  run: async (client, message, args) => {
      
    const data = await fetch(
      "https://www.reddit.com/r/Earthporn/random/.json"
    ).then((res) => res.json());

    const children = data[0].data.children[0];
    const permaLink = children.data.permalink;
    const url = `https://reddit.com${permaLink}`;
    const image = children.data.url;
    const title = children.data.title;
    const upvotes = children.data.ups;
    const comments = children.data.num_comments;

    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle(`${title}`)
      .setURL(url)
      .setImage(image)

    message.channel.send({ embed });
  },
};
