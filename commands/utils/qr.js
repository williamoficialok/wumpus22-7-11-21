const Discord = require("discord.js");

module.exports = {
    nombre: "qr",
    alias: [],
    run: async(client, message, args) => {
    
let text = args.join(" ");

if(!text) {
  const notext = new Discord.MessageEmbed()
  .setDescription(`${client.lang.qr_noprovidetext}`)
  .setColor("RED")
  return message.channel.send(notext)
}    
        
let embed = new Discord.MessageEmbed()
.setTitle('QR CODE')
.setImage(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text.replace(new RegExp(" ", "g"), "%20")}`)
.setFooter(message.guild.name, message.guild.iconURL())
.setColor('RANDOM');


message.channel.send(embed)
    }
}