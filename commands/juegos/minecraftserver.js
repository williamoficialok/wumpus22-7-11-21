const Fetch = require("node-fetch").default;
const Discord = require("discord.js")
module.exports = {
  nombre: "minecraftserver",
  alias: ["mc-server", "mcserver", "server-mc"],

  run: async (client, message, args) => {
        
    const Ip = args[0];
    const nosayip = new Discord.MessageEmbed()
    .setDescription(`${client.lang.mcsv_noprovideid}`)
    .setColor("RED")
    if (!Ip) return message.channel.send(nosayip);

    const response = await Fetch(`https://api.mcsrvstat.us/2/${Ip}`);
    const json = await response.json();

    const notfound = new Discord.MessageEmbed()
    .setDescription(`${client.lang.mcsv_notfound}`)
    .setColor("RED")
    if (!json.online) return message.channel.send(notfound);

    const Embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setTitle((json.hostname || Ip) + " Info")
    .setThumbnail(`https://eu.mc-api.net/v3/server/favicon/${Ip.toLowerCase()}`)
    .addField("IP", json.ip || "Desconocida", true)
    .addField(`${client.lang.mcsv_port}`, json.port || "25565", true)
    .addField(`${client.lang.mcsv_status}`, json.online ? "Online" : "Offline")
    .addField(`${client.lang.mcsv_version}`, json.version || "Desconocida")
    .addField(`${client.lang.mcsv_ping}`, json.ping || `${client.lang.mcsv_pingnotdetermine}`)
    .addField(`${client.lang.mcsv_currentplayes}`, json.players ? json.players.online : "Desconocido")
    .addField(`${client.lang.mcsv_maxplayers}`, json.players ? json.players.max : "Desconocidos")
    
    if (json.motd && json.motd.clean && json.motd.clean.length > 1) Embed.addField(`${client.lang.mcsv_description}`, json.motd.clean.length > 100 ? `${json.motd.clean.slice(0, 100)}...` : json.motd.clean);

    return message.channel.send(Embed);
  }
}
