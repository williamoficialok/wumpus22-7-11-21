const Discord = require("discord.js");
const superagent = require('superagent');
const db = require("quick.db"); 

module.exports = {
    nombre: "achievement",
    alias: ["logro", "mc-logro", "mclogro", "logro-mc", "minecraft-logro"],
    run: async (client, message, args) => {

    let text = args.join(" ");


    const notxt = new Discord.MessageEmbed()
    .setDescription(`${client.lang.archivement_notxt}`)
    .setColor("RED")
    if (!text) return message.channel.send(notxt)

    const lenghtu = new Discord.MessageEmbed()
    .setDescription(`${client.lang.archivement_lenght}`)
    .setColor("RED")
    if (text.length > 22) return message.channel.send(lenghtu)
                let links = ["https://www.minecraftskinstealer.com/achievement/a.php?i=38", "https://www.minecraftskinstealer.com/achievement/a.php?i=1", "https://www.minecraftskinstealer.com/achievement/a.php?i=21", "https://www.minecraftskinstealer.com/achievement/a.php?i=20", "https://www.minecraftskinstealer.com/achievement/a.php?i=13", "https://www.minecraftskinstealer.com/achievement/a.php?i=18", "https://www.minecraftskinstealer.com/achievement/a.php?i=17", "https://www.minecraftskinstealer.com/achievement/a.php?i=9", "https://www.minecraftskinstealer.com/achievement/a.php?i=31", "https://www.minecraftskinstealer.com/achievement/a.php?i=22", "https://www.minecraftskinstealer.com/achievement/a.php?i=23", "https://www.minecraftskinstealer.com/achievement/a.php?i=2", "https://www.minecraftskinstealer.com/achievement/a.php?i=11", "https://www.minecraftskinstealer.com/achievement/a.php?i=19", "https://www.minecraftskinstealer.com/achievement/a.php?i=33", "https://www.minecraftskinstealer.com/achievement/a.php?i=34", "https://www.minecraftskinstealer.com/achievement/a.php?i=26", "https://www.minecraftskinstealer.com/achievement/a.php?i=35", "https://www.minecraftskinstealer.com/achievement/a.php?i=6", "https://www.minecraftskinstealer.com/achievement/a.php?i=7", "https://www.minecraftskinstealer.com/achievement/a.php?i=10", "https://www.minecraftskinstealer.com/achievement/a.php?i=39", "https://www.minecraftskinstealer.com/achievement/a.php?i=4", "https://www.minecraftskinstealer.com/achievement/a.php?i=5", "https://www.minecraftskinstealer.com/achievement/a.php?i=28"]
    
                const { body } = await superagent
                    .get(links[Math.floor(Math.random() * links.length)])
                    .query({
                        h: `${client.lang.archivement}`,
                        t: text
                    });
    
                    
                message.channel.send({ files: [{ attachment: body, name: "achievement_wb.png" }] })

     }
    }