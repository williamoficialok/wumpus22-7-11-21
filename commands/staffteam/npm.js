const fetch = require('node-fetch');
const moment = require('moment');
const Discord = require("discord.js")
  module.exports = {
      nombre: "npm",
      alias: [],
    run: async (client, message, args) => {

      const onlystaff = new Discord.MessageEmbed()
      .setDescription(`${client.lang.onlywumpustaff}`)
      .setColor("RED")
    if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);
        
        const pkg = encodeURIComponent(args.join(' ').replace(/ +/g, '-'));

            const response = await fetch(`https://registry.npmjs.com/${pkg}`);

            const body = await response.json();

            if (response.status === 404 || body.time.unpublished) return message.channel.send('404');
            const version = body.versions[body['dist-tags'].latest];
            const dependencies = version.dependencies
            return message.channel.send(new Discord.MessageEmbed()
                .setColor("RED")
                .setTitle(body.name)
                .setURL(`https://www.npmjs.com/package/${pkg}`)
                .setDescription(body.description || 'Sin descripción.')
                .addField('❯ Autor', body.author, true)
                .addField('❯ Versión', body['dist-tags'].latest, true)
                .addField('❯ Licensia', body.license || 'No establecida.', true)
                .addField('❯ Creación', moment.utc(body.time.created).format('MM/DD/YYYY h:mm A'), true)
                .addField('❯ Ultima modificación', moment.utc(body.time.modified).format('MM/DD/YYYY h:mm A'), true)
                .addField('❯ Dependecias', dependencies && dependencies.length ? dependencies.join(', ') : 'No tiene :0')
 
            );

  }
    }
