module.exports = async (client) => {
//const chalk = require("chalk")
  const GuildSettings = require("../models/settings");
//const Dashboard = require("../dashboard/dashboard");

for (const [id, guild] of client.guilds.cache) {
  await guild.members.fetch();
} 

//console.log(`dashboard lista`);
//Dashboard(client);

  const Discord = require("discord.js");
  var AsciiTable = require('ascii-table')
  var table = new AsciiTable('WUMPUS GAMER')
table
  .setHeading('SERVERS', 'USUARIOS', 'CANALES', 'ESTADO⠀⠀⠀')
  .addRow(`${client.guilds.cache.size}`, `${client.guilds.cache.reduce((c, v) => c + v.memberCount, 0)}`, `${client.channels.cache.size}`, `✅ BIEN`)
 
console.log(table.toString())
now = new Date().toLocaleString();
console.log(`Estoy listo`)


/* var tableweb = new AsciiTable('WEB')
tableweb
  .setHeading('ESTADO⠀', 'FECHA', 'DASHBOARD')
  .addRow(`✅ BIEN`, `23/08/21`, `❌ ERROR`)
 
console.log(tableweb.toString()) */

         // console.log(`\n[Cliente] Wumpus Listo.`.brightGreen)
          let statuses = [`En mantenimiento...`, `IN maintance...`, `.....`];
          setInterval(() => {
            let status = statuses[Math.floor(Math.random() * statuses.length)];
            client.user.setPresence({
              status: "dnd",
              activity: {
                name: status,
                type: "PLAYING"
              }
            });
          }, 15000)
        
}
