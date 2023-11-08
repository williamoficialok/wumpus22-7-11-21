const { MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
    nombre: 'eval',
    alias: ["evaluar"],
    
    run: async (client, message, args) => {

        const onlystaff = new Discord.MessageEmbed()
    .setDescription(`${client.lang.onlywumpustaff}`)
    .setColor("RED")
  if(!client.config.Devs_Team_ID.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);

   const ifcontaintoken = new Discord.MessageEmbed()
   .setDescription(`No..`)
   .setColor("RED")
   if(message.content.match(new RegExp(`token`))) return message.channel.send(ifcontaintoken)

   const ifcontaindestroy = new Discord.MessageEmbed()
   .setDescription(`No..`)
   .setColor("RED")
   if(message.content.match(new RegExp(`destroy`))) return message.channel.send(ifcontaindestroy)

   const ifcontainrun = new Discord.MessageEmbed()
   .setDescription(`No..`)
   .setColor("RED")
   if(message.content.match(new RegExp(`run`))) return message.channel.send(ifcontainrun)

   const ifcontainexecute = new Discord.MessageEmbed()
   .setDescription(`No..`)
   .setColor("RED")
   if(message.content.match(new RegExp(`execute`))) return message.channel.send(ifcontainexecute)



const sendlog = new Discord.MessageEmbed()
.setTitle("Wumpus Gamer | Staff logs :package:")
.setDescription(`${emojijson.bash} El staff ${message.author} evaluo \n \`${message.content}\``)       
.setColor("RANDOM")
client.channels.cache.get('870504493006073896').send(sendlog)

        const embed = new MessageEmbed()
            .setTitle('Evaluando...')
        const msg = await message.channel.send(embed);
        try {
            const data = eval(args.join(' ').replace(/```/g, ''));
            const embed = new MessageEmbed()
                .setTitle('Salida')
                .setDescription(await data)
            .setColor('RANDOM')
            await msg.edit(embed)
            await msg.react('✅')
            await msg.react('❌')
            const filter = (reaction, user) => (reaction.emoji.name === '❌' || reaction.emoji.name === '✅') && (user.id === message.author.id);
            msg.awaitReactions(filter, { max: 1 })
                .then((collected) => {
                    collected.map((emoji) => {
                        switch (emoji._emoji.name) {
                            case '✅':
                                msg.delete()
                                break;
                            case '❌':
                                msg.delete()
                                break;
                        }
                    });
                });
        } catch (e) {
            const embed = new MessageEmbed()
                .setTitle(`${emojijson.no} **ERROR**`)
                .setDescription(e)
                .setColor("RED")
            return await msg.edit(embed);
        }
    }
}


















