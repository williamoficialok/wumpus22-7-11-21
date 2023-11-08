const Discord = require("discord.js");
module.exports = {
    nombre: "reboot",
    alias: [],
    run: async (client, message, args) => {

      const onlystaff = new Discord.MessageEmbed()
      .setDescription(`${client.lang.onlywumpustaff}`)
      .setColor("RED")
    if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff);

try {
    message.channel.send("reiiniciandose").then(msg => {
      setTimeout(function() {
         msg.edit("LISTO!");
      }, 2000);
    })
    .then(() => {
      client.destroy(); 
      //process.exit[0]
    }).then(() => {
      console.log("Ok!!");
    })
    .then(() => {
      client.login(client.config.token)
    }).then(() => {
      console.log(`reinicio completo.`);
    })

      } catch(e) {
        message.channel.send(`[ERROR] ${e.message}`)

}

 }
}