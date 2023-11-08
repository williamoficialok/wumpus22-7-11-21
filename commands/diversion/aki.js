const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db"); 

module.exports = {
    nombre: "aki",
    alias: ["akinator"],
    run: async (client, message, args) => {

        
        const getlang = await db.fetch(`setlang_${message.guild.id}`)

        //Spanish aki 
        if (getlang === "es") {

    const { Aki } = require("aki-api")
    const emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"]
    const Started = new Set();

    const ifalready = new Discord.MessageEmbed()
    .setDescription(`¿Qué estás intentado?`)
    .setColor("RED")
      if (!Started.has(message.author.id)) Started.add(message.author.id);
  
        else return message.reply(ifalready);

        const region = "es";

    const aki = new Aki({ region });
        await aki.start();
        const msg = await message.lineReplyNoMention(new MessageEmbed()
        .setAuthor(message.author.username, `${message.author.displayAvatarURL()}`)
            .setTitle(`Pregunta ${aki.currentStep + 1}`)
            .setColor("RANDOM")
            .setFooter("Por favor, espere a que cargen las reacciones, y no las spamee.")
            .setDescription(`**${aki.question}**\n${aki.answers.map((x, i) => `${emojis[i]} ${x}`).join("\n")} \n❌ Terminar juego`));
        for (let emoji of emojis) await msg.react(emoji).catch(console.error);
        const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id === message.author.id, { time: 60000 * 6 });
        collector.on("collect", async (reaction, user) => {
            reaction.users.remove(user).catch(console.error);
            if (reaction.emoji.name == "❌") return collector.stop();

            await aki.step(emojis.indexOf(reaction.emoji.name));
            if (aki.progress >= 70 || aki.currentStep >= 78) {
                await aki.win();
                collector.stop();
                message.lineReply(new MessageEmbed()
                    .setTitle("Hmmmmm... ¿Este es tú personaje?")
                    .setDescription(`**${aki.answers[0].name}**\n${aki.answers[0].description}\nRanking **#${aki.answers[0].ranking}**\n\n[si (**s**) / no (**n**)]`)
                    .setImage(aki.answers[0].absolute_picture_path)
                    .setColor("RANDOM"));
                message.channel.awaitMessages(response => ["si", "s", "no", "n"].includes(response.content.trim().toLowerCase()) &&
                    response.author.id == message.author.id, { max: 1, time: 30000, errors: ["time"] })
                    .then(collected => {
                        const content = collected.first().content.trim().toLowerCase();
                        if (content == "s" || content == "si")
                            return message.lineReply(new MessageEmbed()
                                .setColor("GREEN")
                                .setDescription("Lo sabía <:wg_pepe_sunglass:870858397484978188>"));
                        else
                            return message.lineReply(new MessageEmbed()
                                .setColor("RED")
                                .setDescription("Lo siento, no la conozco, por favor intentelo de nuevo :heart:"));
                    });
                return;
            }
            msg.edit(new MessageEmbed()
            .setAuthor(message.author.username, `${message.author.displayAvatarURL()}`)
            .setTitle(`Pregunta ${aki.currentStep + 1}`)
                .setColor("RANDOM")
                .setDescription(`**${aki.question}**\n${aki.answers.map((x, i) => `${emojis[i]} ${x}`).join("\n")} \n❌ Terminar juego`));
        });


        collector.on("end", () => {
            Started.delete(message.author.id);
            msg.delete({ timeout: 1000 }).catch(() => { });
        });
    }


            //English aki 
            if (getlang ==="en") {
                const { Aki } = require("aki-api")
                const emojis = ["👍", "👎", "❔", "🤔", "🙄", "❌"]
                const Started = new Set();
                const ifalready = new Discord.MessageEmbed()
                .setDescription(`What you are trying?`)
                .setColor("RED")
                  if (!Started.has(message.author.id)) Started.add(message.author.id);
                    else return message.reply(ifalready);
                    const region = "en";
                const aki = new Aki({ region });
                    await aki.start();
                    const msg = await message.lineReply(new MessageEmbed()
                    .setAuthor(message.author.username, `${message.author.displayAvatarURL()}`)
                    .setTitle(`Question ${aki.currentStep + 1}`)
                        .setColor("RANDOM")
                        .setFooter("Please, wait for the reactions to load")
                        .setDescription(`**${aki.question}**\n${aki.answers.map((x, i) => `${emojis[i]} ${x}`).join("\n")} \n❌ Finish game`));

                    for (let emoji of emojis) await msg.react(emoji).catch(console.error);

                    const collector = msg.createReactionCollector((reaction, user) => emojis.includes(reaction.emoji.name) && user.id === message.author.id, { time: 60000 * 6 });

                    collector.on("collect", async (reaction, user) => {
                        reaction.users.remove(user).catch(console.error);
                        if (reaction.emoji.name == "❌") return collector.stop();
            
                        await aki.step(emojis.indexOf(reaction.emoji.name));
                        if (aki.progress >= 70 || aki.currentStep >= 78) {
                            await aki.win();
                            collector.stop();

                            message.lineReply(new MessageEmbed()
                                .setTitle("Hmmmm... This is your character?")
                                .setDescription(`**${aki.answers[0].name}**\n${aki.answers[0].description}\nRanking **#${aki.answers[0].ranking}**\n\n[yes (**y**) / no (**n**)]`)
                                .setImage(aki.answers[0].absolute_picture_path)
                                .setColor("RANDOM"));

                            message.channel.awaitMessages(response => ["yes", "y", "no", "n"].includes(response.content.trim().toLowerCase()) &&
                                response.author.id == message.author.id, { max: 1, time: 30000, errors: ["time"] })
                                .then(collected => {
                                    const content = collected.first().content.trim().toLowerCase();
                                    if (content == "yes" || content == "y")
                                        return message.lineReply(new MessageEmbed()
                                            .setColor("RANDOM")
                                            .setDescription("I knew it <:wg_pepe_sunglass:870858397484978188>"));
                                    else
                                        return message.lineReply(new MessageEmbed()
                                            .setColor("RED")
                                            .setDescription("I sorry, i do not know, please try it again ❤️"));
                                });
                            return;
                        }

                        msg.edit(new MessageEmbed()
                        .setAuthor(message.author.username, `${message.author.displayAvatarURL()}`)
                        .setTitle(`Question ${aki.currentStep + 1}`)
                            .setColor("RANDOM")
                            .setDescription(`**${aki.question}**\n${aki.answers.map((x, i) => `${emojis[i]} ${x}`).join("\n")} \n❌ Finish game`));
                    });
            
            
                    collector.on("end", () => {
                        Started.delete(message.author.id);
                        msg.delete({ timeout: 1000 }).catch(() => { });
                    });
                }
                //Do not there support to Catala. 😞
     }
    }