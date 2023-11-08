const sendError = require("../../util/error");
const db = require("megadb");
const Discord = require("discord.js");

module.exports = {
    nombre: "volume",
    alias: ["v", "vol"],

  run: async (client, message, args) => {

      let vip = new db.crearDB('vip') 
      
      const novip = new Discord.MessageEmbed()
      .setDescription(`${client.lang.needvip}`)
      .setColor(`RED`)
if(!vip.tiene(message.author.id)) return message.channel.send(novip)
      
    const channel = message.member.voice.channel;
    if (!channel) return sendError(`${client.lang.membernovoicechannel}`, message.channel);

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) return sendError(`${messagejson.nosongplaying}`, message.channel);

    if (!serverQueue.connection) return sendError(`${client.lang.nosongsplaying}`, message.channel);

    const xd2 = new Discord.MessageEmbed()
    .setDescription(`${client.lang.volume_is} ${serverQueue.volume}`)
    .setColor(`RANDOM`)
    if (!args[0])return message.channel.send(xd2);

const onlynumbeers = new Discord.MessageEmbed()
.setDescription(`${client.lang.onlynumbers}`)
.setColor(`RED`)
     if(isNaN(args[0])) return message.channel.send(onlynumbeers).catch(err => console.log(err));

    if(parseInt(args[0]) > 150 ||(args[0]) < 0) return sendError(`${client.lang.volume_novalid}`, message.channel).catch(err => console.log(err));

    serverQueue.volume = args[0]; 

    serverQueue.connection.dispatcher.setVolumeLogarithmic(args[0] / 100);

    let xd = new Discord.MessageEmbed()
    .setDescription(`${client.lang.volume_now} **${args[0]/1}/150.**`)
    .setColor("RANDOM")
    return message.channel.send(xd);
  }
}