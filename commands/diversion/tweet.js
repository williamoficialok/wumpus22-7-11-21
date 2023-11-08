const Discord = require("discord.js"); 
const fetch = require("node-fetch"); 

module.exports = {
    nombre: "tweet", 
    alias: ["tweeter"],
    run: async (client, message, args) => {

        const user = message.author.username

        const textTweet = args.join(" ")

        const no = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setDescription(`${client.lang.tweet_nosaytxt}`)
        if (!textTweet) return message.channel.send(no)
        const response = await fetch(`https://nekobot.xyz/api/imagegen?type=tweet&username=${user}&text=${textTweet}`);

    const fetched = await response.json();

        const embedTweet = new Discord.MessageEmbed()
        .setTitle(`Tweet`)
        .setColor("BLUE")
        .setImage(fetched.message)
        message.channel.send(embedTweet);
    }
}


