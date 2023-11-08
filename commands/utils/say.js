const Discord = require("discord.js");

module.exports = {
  nombre: "say",
  alias: ["repite", "di", "decir"],

  run: async (client, message, args) => {

   	const noargs = new Discord.MessageEmbed()
	.setDescription(`${client.lang.say_notext}`)
	.setColor('RED')

	const noperms = new Discord.MessageEmbed()
	.setDescription(`${client.lang.say_contain_spam}`)
	.setColor('RED')
			
  
    if (!args.join(' ')) {
      message.channel.send(noargs)
        .then(msg => msg.delete({ timeout: 5000 }))
        .catch(e => {
          return;
        });
      return;
    }

    if (args.join(' ').includes('http') && !message.member.hasPermission('ADMINISTRATOR')) {
      message.channel.send(noperms)
        .then(msg => msg.delete({ timeout: 10000 }))
        .catch(e => {
          return;
        });
      return;
    }
   
    if(!args[0]) return message.channel.send(args.join(' '));
    message.channel.send(args.join(' '), {disableMentions: 'everyone'})
    message.delete()
  }
}
