const Discord = require('discord.js');

module.exports = {
  nombre: "announcement",
  alias: ["anuncio", "aviso", "avís", "noticia"],
  run: async (client, message, args) => {

    const Canal = message.mentions.channels.first() || message.guild.channels.cache.find(e => e.id == args[0]);

    if(!Canal.type === "text") return message.channel.send("No puedes enviar un anuncio a un canal que no sea de texto.")
    
    const botnoperms = new Discord.MessageEmbed()
    .setDescription(`${client.lang.botnopermissions}`)
    .setColor(`RED`)
    if (!message.guild.me.hasPermission("SEND_MESSAGES")) return message.author.send(botnoperms) 
      
    const usernoperms = new Discord.MessageEmbed()
      .setDescription(`${client.lang.usernoperms}`)
      .setColor(`RED`)
    if (!message.member.hasPermission('MANAGE_ROLES')) return message.channel.send(usernoperms)

    const nomentionchannel = new Discord.MessageEmbed()
    .setDescription(`${client.lang.nomentionchannel}`)
    .setColor(`RED`)
    if (!Canal) return message.channel.send(nomentionchannel);

    const noaviso = new Discord.MessageEmbed()
    .setDescription(`${client.lang.annc_notsayann}`)
    .setColor(`RED`)
    if (!args.slice(1).join(' ')) return message.channel.send(noaviso);

    const embed = new Discord.MessageEmbed()
      .setDescription(`${client.lang.annc_you_re_sure} ${Canal}`)
      .addField(`${client.lang.annc_announcment}`, args.slice(1).join(' '))
      .setColor('RANDOM')
    message.channel.send(embed).then(emoji => {

      emoji.react('✅');
      emoji.react('❌');

      const Filtro = function(reaction, user) {
        return ['✅', '❌'].includes(reaction.emoji.name) && user.id == message.author.id;
      }

      emoji.awaitReactions(Filtro, {
        max: 1,
        time: 60000,
        errors: ['time']
      }).catch(function() {
        emoji.send(`${client.lang.annc_notconfirm}`);
      }).then(c => {
        const reaccion = c.first();
        if (reaccion.emoji.name === '✅') {
          const Confirmo = new Discord.MessageEmbed()
            .setDescription(`${client.lang.annc_sendto}` + Canal.toString())
            .setColor('GREEN')
          emoji.edit(Confirmo)

          const Noticia = new Discord.MessageEmbed()
            .setTitle(`${client.lang.annc_announcment}`)
            .setFooter(message.guild.name, message.guild.iconURL())
            .setDescription(args.slice(1).join(' '))
            .setColor('RANDOM')
            .setTimestamp()
          Canal.send(Noticia);

        } else if (reaccion.emoji.name === '❌') {
          const NoConfirmo = new Discord.MessageEmbed()
            .setDescription(`${client.lang.annc_cancel}`)
            .setColor('RED')
          emoji.edit(NoConfirmo);
        }
      })
    })
  }
}
