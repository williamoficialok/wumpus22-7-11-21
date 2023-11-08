const Discord = require("discord.js");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
nombre: ["fabithost"],
alias: ["fabriciohost", "fabricio-host", "fabit", "fabit-host", "free-host"],

run: async (client, message, args) => {

const fabbriciogoood = new Discord.MessageEmbed()
.setTitle(`${client.lang.fabithost_title}`)
.setDescription(`
${client.lang.fabithost_message}

${client.lang.fabithost_discord}
${client.lang.fabithost_portal}
${client.lang.fabithost_panel}
`)
.setColor(`RED`)
message.channel.send(fabbriciogoood)
}
}
