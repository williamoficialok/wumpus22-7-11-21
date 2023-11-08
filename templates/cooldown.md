let cooldown = new Set(); 
const { MessageEmbed }= require("discord.js");
const db = require("megadb");
const ms = require('ms');
const dbe = require('quick.db');
const pr = require("pretty-ms");
const Discord = require('discord.js');
//Unas depencias :sweat_smile:

module.exports = {
  nombre: "test",
  alias: "",
  run: async (client, message, args) => { //Esto de los modulos lo borras si tu bot no es handler
      //Blacklist
              let blacklist = new db.crearDB('blacklist');

  if(blacklist.tiene(message.author.id)){    
const awa = new MessageEmbed()
  .setDescription(':x: | No puedes usar este comando, estás en la blacklist!') 
  .setColor('RED') 
  return message.channel.send(awa)
  }
      
      //Una variable, user = el autor del mensaje
  const user = message.author; 
      //La variable de tiempo, En este caso 1 minuto
  let tiempo = ms("10s") 
  let cd = dbe.fetch(`timer2_${message.author.id}`)

  if(Date.now() < cd) {
    let restante = cd  - Date.now()

    let r = pr(restante, {verbose: true}).replace("hours", "Horas").replace("minutes", "Minutos y").replace("seconds", "Segundos"). replace("hour ", "Hora ")
    .replace("minute ", "Minuto ")
//SI tiene cooldown enviamos este embed de cooldown
    const tienecooldown = new MessageEmbed()
    .setDescription(`<a:no:825110640988913684> | Debes esperar ${r} para poder usar este comando de nuevo.`) 
    .setColor("RED")

    message.channel.send(tienecooldown) 
    return; 
  }
//Si no lo tiene enviamos el embed correcto
  const awa = new MessageEmbed() 
  .setAuthor(user.username, message.author.displayAvatarURL())
  .setDescription(`Ok.`) 
  .setColor("RANDOM")
  .setFooter(message.guild.name, message.guild.iconURL())
  .setTimestamp()

  dbe.delete(`timer2_${message.author.id}`) //Eliminamos el cooldown
  dbe.add(`timer2_${message.author.id}`, Date.now() + tiempo) //Y lo volvemos a añadir

  message.channel.send(awa)
  }

}