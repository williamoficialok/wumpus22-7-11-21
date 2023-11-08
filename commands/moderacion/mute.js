const Discord = require('discord.js');
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Collection
const db = require("megadb")
const muterol = new db.crearDB("muterole")
const ms = require("ms");
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "mute",
  alias: ["silenciar"],

  run: async (client, message, args) => {

    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${messagejson.botnoperms} en el servidor **${message.guild.name}**`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${messagejson.nopermissions}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(usernoperms)
        
    let mencionado = message.mentions.members.first();

    const nomention = new Discord.MessageEmbed()
    .setDescription(`${messagejson.nomention}`)
    .setColor(`RED`)
    if (!mencionado) return message.channel.send(nomention)

        let time = args[1]
        const notimesay =  new Discord.MessageEmbed()
        .setDescription(`${messagejson.notimesay}`)
        .setColor(`RED`)
        if(!time) return message.channel.send(notimesay)

        let timer = ms(time)

        let razon = args[2]
        if(!razon){
            razon = `${messagejson.noespecifico}`
        }
        const noconfiguredrole = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} No tienes un rol configurado, pero puedes configurarlo con \`w!muterole\``)
        .setColor(`RED`)
        if(!muterol.tiene(message.guild.id)) return message.channel.send(noconfiguredrole)

        let rol = await muterol.obtener(message.guild.id)

        const alredymuted = new Discord.MessageEmbed()
        .setDescription(`${emojijson.no} Este usuario ya esta muteado.`)
        .setColor(`RED`)
        if(mencionado.roles.cache.has(rol)) return message.channel.send(alredymuted)


        mencionado.roles.add(rol)
const ggez = new Discord.MessageEmbed()
.setTitle(`Wumpus Gamer | Moderación`)
.setDescription(`
${emojijson.si} El usuario **${mencionado}** ha sido silenciando 
**Tiempo** ${time}
**Razón** ${razon}
**Moderador** ${message.author}
`)
.setColor(`RANDOM`)
        message.channel.send(ggez)

        await setTimeout(async function()   {

            await mencionado.roles.remove(rol)
            const endmute = new Discord.MessageEmbed()
            .setDescription(`${emojijson.si} El tiempo del silencio se acabo, desmuteo a **${mencionado}**.`)
            .setColor(`GREEN`)
            await message.channel.send(endmute).catch(error =>{

                const errorf = new Discord.MessageEmbed()
                .setDescription(`${messagejson.error}`)
                .setColor(`RED`)
                message.channel.send(errorf)

            })

        }, timer)

  }
}