const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: ["off"],
  alias: [],
  
  run: async (client, message, args) => {

    const onlystaff = new Discord.MessageEmbed()
    .setDescription(`${client.lang.onlywumpustaff}`)
    .setColor("RED")
  if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);
  
    await message.channel.send(`${message.author}, me apagare como una **FOKA**`)
console.log(`[OFF] El staff ${message.author.tag} me apago.`.red)
client.destroy()
  }
  }