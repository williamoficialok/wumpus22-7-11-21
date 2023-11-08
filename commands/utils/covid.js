const superagent = require('superagent');
const Discord = require("discord.js");

module.exports = {
  nombre: "covid",
  alias: [],
  run: async (client, message, args) => {

    let pais = args[0]

    const nosay = new Discord.MessageEmbed()
    .setDescription(`${client.lang.covid_noprovidename}`)
    .setColor("RED")
    if(!pais) return message.channel.send(nosay)
    
    superagent
    .get(`https://corona.lmao.ninja/v2/countries/${pais}`)
    .end((err,res) => {
      let body = res.body; 
      
      const onlyenglish = new Discord.MessageEmbed()
      .setDescription(`${client.lang.covid_notfound}`)
      .setColor(`RED`)
      if(body.message) return message.channel.send(onlyenglish) 
    
      
      var embed = new Discord.MessageEmbed()
      .setAuthor(`${client.lang.covid_cases} ` + pais)
      .addField(`${client.lang.covid_cases_totals}`, `${body.cases}`, true) // Casos totales de ese pais
      .addField(`${client.lang.covid_cases_critices}`, `${body.critical}`, true) // Casos criticos de ese pais
      .addField(`${client.lang.covid_today}`, `${body.todayCases}`, true) // Casos de "HOY" de ese pais
      .addField(`${client.lang.covid_totals_deats}`, `${body.deaths}`, true) // Muertes por el COVID-19 de ese pais
      .addField(`${client.lang.covid_deaths_today}`, `${body.todayDeaths}`, true) // Muertes de hoy por el COVID-19 ese pais
      .addField(`${client.lang.covid_recupereds}`, `${body.recovered}`, true) // Recuperados del COVID-19
      .addField(`${client.lang.covid_preventionss}`, `${client.lang.covid_preventions}`, true) 
      .setColor("RANDOM")
      .setThumbnail("https://www.elindependiente.com/wp-content/uploads/2020/03/gif-mapa-internacional.gif")
      message.channel.send(embed) // Envia toda la información del COVID-19, del pais buscado en un EMBED.
      
    }) 
  }
}


// Coded By Jordi ღ#0666
//Algún día volveras a poner códigos?, :(