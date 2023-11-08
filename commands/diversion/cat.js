const fetch = require("superagent");
const Discord = require("discord.js");

module.exports = {
    nombre: "cat",
    alias: ["catto", "gato"],
    run: async (client, message, args) => {
        
fetch.get("https://some-random-api.ml/img/cat").then(xs => {
    const cat = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setImage(xs.body.link);
    message.channel.send(cat);
}); 
    }
}