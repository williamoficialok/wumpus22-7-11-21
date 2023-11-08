const Discord = require('discord.js')
const db = require('megadb')
const canalbienvenida = new db.crearDB("canalbienvenida")
const mensajeb = new db.crearDB("mensajebienvenida")
const titleb = new db.crearDB("titleb")
const authorb = new db.crearDB("authorb")

module.exports = async (client, member) => {

    if(!canalbienvenida.tiene(member.guild.id)) return;
    if(!mensajeb.tiene(member.guild.id)) return;
    if(!titleb.tiene(member.guild.id)) return;
    if(!authorb.tiene(member.guild.id)) return;
    
    const canal = await canalbienvenida.obtener(member.guild.id)

    const title = await titleb.obtener(member.guild.id)
    
    const autor = await authorb.obtener(member.guild.id)

    const mensaje = await  mensajeb.obtener(member.guild.id)

    const mensajea = mensaje.replace(/{user}/, member.username).replace(/{usertag}/, member.tag).replace(/{servidor}/, member.guild.name).replace(/{memberCount}/, member.guild.memberCount)

    const embed = new Discord.MessageEmbed()

    .setAuthor(autor)
    .setTitle(title)
    .setDescription(mensajea)
    .setColor("RANDOM")
    .setTimestamp()
    .setThumbnail(member.user.displayAvatarURL())

    //client.channels.cache.get(canal).send(embed)
    member.guild.channels.cache.get(canal).send(embed)
}