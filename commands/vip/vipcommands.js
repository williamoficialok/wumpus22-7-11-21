const db = require('megadb');
const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js')

module.exports = {
  nombre: "viphelp",
  alias: ["viphelp", "gold-commands", "gold-cmds"],

  run: async (client, message, args) => {
      
let vip = new db.crearDB('vip') 
const nohavevip = new Discord.MessageEmbed() 
.setDescription(`${client.lang.emojisjs} Debes tener vip para utilizar este comando.`)
if(!vip.tiene(message.author.id)) return message.channel.send(nohavevip)

const embed = new MessageEmbed()
.setTitle('**Comandos VIP (Esto aún no está xD)**')
.setDescription('¡Gracias por ayudar al TeamWumpus!')
.setColor('RANDOM')
message.channel.send(embed)
    }
}
