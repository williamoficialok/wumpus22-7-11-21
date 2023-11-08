const Discord = require("discord.js");
const moment = require("moment");
const fetch = require("node-fetch")

module.exports = {
    nombre: "github",
    alias: [],
    run: async (client, message, args) => {

    try {

        const nosayuser = new Discord.MessageEmbed()
        .setDescription(`${client.lang.github_noprovideuser}`)
        .setColor("RED")

    if (!args[0]) return message.channel.send(nosayuser)
    
    fetch(`https://api.github.com/users/${args.join('-')}`)
    .then(res => res.json()).then(body => {

        const notfounduser = new Discord.MessageEmbed()
    .setDescription(`${client.lang.github_notfound}`)
    .setColor("RED")
      if (body.message) return message.channel.send(notfounduser);
      let { login, avatar_url, name, id, html_url, public_repos, followers, following, location, created_at, bio } = body;

            const unu = new Discord.MessageEmbed()
            .setAuthor(`${client.lang.github_from} ${login}`)
            .setColor(`RANDOM`)
            .setThumbnail(`${avatar_url}`)
            .addField(`${client.lang.github_user}`, `${login}`)
            .addField(`${client.lang.github_id}`, `${id}`)
            .addField(`${client.lang.github_biography}`, `${bio || "No tiene biografía"}`)
            .addField(`${client.lang.github_ubication}`, `${location || "No especifico"}`)
            .addField(`${client.lang.github_createdAt}`, moment.utc(created_at).format("dddd, MMMM, Do YYYY"))
            .addField(`${client.lang.github_repositories}`, `${public_repos || "0"}`, true)
            .addField(`${client.lang.github_followers}`, `${followers}`, true)
            .addField(`${client.lang.github_following}`, `${following}`, true)

            message.channel.send(unu)
    }); 
} catch (error) {
        return; 
    }


    }
}