const figlet = require('figlet');
const Discord = require("discord.js");

module.exports = {
  nombre: "asci",
  alias: ["ascii", "asci"],

  run: async (client, message, args) => {

const maxLen = 80; 
  
const maxlengh = new Discord.MessageEmbed()
.setDescription(`${client.lang.ascii_lenght}`)
.setColor("RED")
  if(args.join(" ").length > maxLen) return message.channel.send(maxlengh) 
  
  const notxt = new Discord.MessageEmbed()
  .setDescription(`${client.lang.ascii_notxt}`)
  .setColor("RED")
  if(!args[0]) return message.channel.send(notxt);
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log("ERR")
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});
  });

}
}