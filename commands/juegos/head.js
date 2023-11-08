const Discord = require('discord.js');
var MojangAPI = require('mojang-api');
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "head",
  alias: ["cabeza"],

  run: async (client, message, args) => {
   
var date = new Date();
  var username = args[0]
  var headembed = new Discord.MessageEmbed()
  if(!args[0] || args[1]){
  return message.channel.send(`${client.lang.head_notvalidusr}`).then(msg => {msg.delete({ timeout: 10000 })})
  }

  date.setMonth(0);
  MojangAPI.uuidAt(username, date, function(error, uuid) {
    const nopremium = new Discord.MesssageEmbed()
    .setDescription(`${client.lang.head_usrnopremium}`)
    .setColor("RED")
      if(error) return message.channel.send(nopremium)//.then(msg => {msg.delete({ timeout: 10000 })});
      
        headembed.setAuthor(message.author.username,`${message.author.displayAvatarURL()}`)
        headembed.setColor("RANDOM")
        headembed.setImage(`https://visage.surgeplay.com/head/${uuid.id}`)
        headembed.setDescription(`${username} Head`)
      message.channel.send(headembed);
  });
  }
}