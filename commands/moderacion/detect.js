const Discord = require("discord.js");
module.exports = {
    nombre: "detect",
    alias: ["detectar-raiders"],
    run: async (client, message, args) => {
const raiderlist = [ 
    "579108012829048843",
    "807028769780662272",
    "779828568028479518",
    "434953217705508865",
    "753603011527311390",
    "733133050447134820",
    "841657443212722176",
    ]; 

const getraider = message.guild.members.cache.filter(xs => raiderlist.includes(xs.id)) 

if(getraider.size){
  const embed = new Discord.MessageEmbed()
  .setTitle('Detección de Raiders')
  .setDescription(`**Raiders encontrados** ejecute \`w!forceban\` para banearlos.`)
.addField('Raiders', `${getraider.map(xs => xs.toString())}`)
.setColor('RED')
return message.channel.send(embed)
} else {

    const nodetec = new Discord.MessageEmbed()
    .setDescription(`**No se han encontrados Raiders**.\nSi desea, puede usar \`w!forceban\` para banearlos.`)
  .setColor('RED')
  return message.channel.send(nodetec)
}

    }
}