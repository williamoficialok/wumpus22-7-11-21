const Discord = require("discord.js")
const fetch = require("node-fetch")
module.exports = {
    nombre: "phcomment", 
    alias: ["pornhubcomment", "ph-comment", "pornhub-comment"],
    run: async (client, message, args) => {

        const user = message.author

        const textPh = args.join(" ")

        const no = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setDescription(`${client.lang.phcomment_nosaytxt}`)
        if (!textPh) return message.channel.send(no)
        const response = await fetch(`https://nekobot.xyz/api/imagegen?type=phcomment&image=${user.displayAvatarURL()}&text=${textPh}&username=${user.username}&raw=1,'logo.png'`);

    const fetched = await response.json();

        const embedTweet = new Discord.MessageEmbed()
        .setTitle(`PornHub Commnent :flushed:`)
        .setColor("ORANGE")
        .setImage(fetched.message)
        message.channel.send(embedTweet);
    }
}
