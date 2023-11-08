const Discord = require("discord.js");
const malScraper = require('mal-scraper');

module.exports = {
    nombre: "anime",
    alias: [],
  run: async (client, message, args) => {

    const searchedanime = args.join(" ")

    const nosrc = new Discord.MessageEmbed()
    .setDescription(`${client.lang.anime_noprovide}`)
    .setColor("RED")

    if (!searchedanime) return message.channel.send(nosrc);

    malScraper.getInfoFromName(searchedanime).then((ñ) => {
        const embed = new Discord.MessageEmbed()
          .setAuthor(`${client.lang.anime_results} ${data.englishTitle}`)
          .setThumbnail(data.picture)
          .setColor("RANDOM")
          .addField(`${client.lang.anime_premiered}`, `${data.premiered}`, true)
          .addField(`${client.lang.anime_en_title}`, `${data.englishTitle}`, true)
          .addField(`${client.lang.anime_ja_title}`, `${data.japaneseTitle}`, true)
          .addField(`${client.lang.anime_ranked}`, `${data.ranked}`, true)
          .addField(`${client.lang.anime_duration}`, `${data.duration}`, true)
          .addField(`${client.lang.anime_broadcast}`, `${data.broadcast}`, true)
          .addField(`${client.lang.anime_episodes}`, `${data.episodes}`, true)
          .addField(`${client.lang.anime_status}`, `${data.status}`, true)
          .addField(`${client.lang.anime_gen}`, `${data.genres}`, true)
          .addField(`${client.lang.anime_type}`, `${data.type}`, true)
          .addField(`${client.lang.anime_rating}`, `${data.rating}`, true)
          .addField(`${client.lang.anime_onair}`, `${data.aired}`, true)
          .addField(`${client.lang.anime_popularity}`, `${data.popularity}`, true)
          .addField(`${client.lang.anime_members}`, `${data.members}`, true)
          .addField(`${client.lang.anime_stats}`, `${data.scoreStats}`, true)
          .addField(`${client.lang.anime_anime_source}`, `${data.source}`, true)
          .addField(`${client.lang.anime_score}`, `${data.score}`, true)
          .addField(`${client.lang.anime_favorites}`, `${data.favorites}`, true)
          .addField(`${client.lang.anime_studio}`, `${data.studios}`, true)
          .addField(`${client.lang.anime_synonyms}`, `${data.synonyms}`, true)
          .addField(`${client.lang.anime_status}`, `${data.status}`, true)
          .addField(`${client.lang.anime_link}`, `${data.url}`, true)

        message.channel.send(embed)

      }).catch((error) => { 
        const senderror = new Discord.MessageEmbed()
        .setDescription(`${client.lang.error}`)
        .setColor("RED")
        message.channel.send(senderror)

        const getdate = now = new Date().toLocaleString();
          const embederror = new Discord.MessageEmbed()
          .setTitle(`Ocurrió un error ❌`)
          .setThumbnail(message.guild.iconURL({ dynamic: true, size: 1024 }))
          .setDescription(`
          **Servidor** \`${message.guild || "Ninguno"}\`
          **Servidor ID** \`${message.guild.id || "Ninguno"}\`
          **Autor mensaje** \`${message.author.tag || "Ninguno"}\`
          **Autor mensaje ID** \`${message.author.id || "Ninguno"}\`
          **Comando** \`${message.content || "Ninguno"}\`
          **Canal ID** \`${message.channel.id || "Ninguno"}\`
          \`\`\`js
          ${error.stack}
          \`\`\`
          `)
          .setColor("RED")
          .setFooter(`${getdate} - ES`) 

        client.channels.cache.get(`${client.config.channel_logs}`).send(`<@&${client.config.rol_ping_error}>`)
        client.channels.cache.get(`${client.config.channel_logs}`).send(embederror)
      });
      
  }
}
