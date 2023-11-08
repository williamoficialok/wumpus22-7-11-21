const Discord = require("discord.js");
require('discord-reply');

module.exports = {
  nombre: "botinfo",
  alias: ["bf"],
  description: "Información del bot.",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>botinfo\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {

    const emojijson = client.emojijs; 

    const osu = require("node-os-utils");
const cpu = osu.cpu;
let cpuusage = await cpu.usage();

    let totalSeconds = (client.uptime / 1000);
    let days = Math.floor(totalSeconds / 86400);
    totalSeconds %= 86400;
    let hours = Math.floor(totalSeconds / 3600);
    totalSeconds %= 3600;
    let minutes = Math.floor(totalSeconds / 60);
    let seconds = Math.floor(totalSeconds % 60);
 
  const info = new Discord.MessageEmbed()
        .setTitle(`${client.lang.botinfo_information}`)
        .setColor("RANDOM")
        .setDescription(`
**${client.lang.botinfo_developers}**
<@700025471730974778> <@698650125022789632>
<@310494794461741056> <@491255187684458536>
<@802278295206101022> <@715542241451442216>
<@608029420929679370> - Web

${client.lang.botinfo_administrators}
<@664957835486167050> 

${client.lang.botinfo_moderators}
<@757052086528639027> <@802323372192301080>
<@700165688920113231> <@528860743437910016>

${client.lang.botinfo_status}
${client.lang.botinfo_web}
${client.lang.botinfo_livechat}
${client.lang.botinfo_staff_team}
${client.lang.botinfo_appeal}
${client.lang.botinfo_support}
${client.lang.botinfo_vps}
${client.lang.botinfo_librery}

**Bear Studios**
${emojijson.astro} [Astro Spigot](https://astrospigot.gq)
${emojijson.bearstudios} [Bear Studios](https://bearqx.gq)

**${client.lang.botinfo_statsvps}**
${client.lang.botinfo_os}
${client.emojijs.loading} ${days} ${client.lang.botinfo_days}, ${hours} ${client.lang.botinfo_hours}, ${minutes} ${client.lang.botinfo_minutes}, ${seconds} ${client.lang.botinfo_seconds} 
${client.emojijs.ram} Ram ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}mb /16GB
${client.emojijs.cpu} CPU Intel Xeon CPU E5-2620 v3 @ 2.40GHz **${cpuusage}%/100%**

**${client.lang.botinfo_stats_wumpus}**
${client.lang.botinfo_servers} ${client.guilds.cache.size}
${client.lang.botinfo_users} ${client.guilds.cache.reduce((c, v) => c + v.memberCount, 0)}
`)
message.lineReply(info)
}
  }
