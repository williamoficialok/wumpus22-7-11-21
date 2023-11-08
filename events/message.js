module.exports = async (client, message) => {
  // if (message.guild.id !=="827616830125899863") return; 
   const config = require("../config.js")
   const emojijson = require(".././emojis.json");
   const Discord = require("discord.js");
   const dbm = require('megadb');
   let blacklist = new dbm.crearDB('blacklist');
   const prefix_db = new dbm.crearDB('prefix')
   const dbq = require("quick.db");
   const messauth = message.author;
   client.emojijs = emojijson; 
   client.config = config;
 
     if (message.author.bot) return;
       if (message.channel.type === 'dm') return;
 
       let mentiontwo = new RegExp(`^<@!?${client.user.id}>`);
 
       const schema = require("../models/setprefix.js"); 
 
     const getprefixa = await schema.findOne({server: message.guild.id}, async(err, dbdata) => {
      
       let prefix; 
 
       if (dbdata) {
         prefix = message.content.match(mentiontwo) ? message.content.match(mentiontwo)[0] : dbdata.prefixdb; 
       }  else {
       prefix = message.content.match(mentiontwo) ? message.content.match(mentiontwo)[0] : "w!" 
       }
 
       let prefixtwo //Esté sólo obtiene el prefix normal, ya que en de arriba contiene un regExp para que se pueda por mención, y quiero que sepan cuál es prefix.
       if (dbdata) {
         prefixtwo = dbdata.prefixdb; 
       } else {
         prefixtwo = "w!" 
       }
 
     if (message.content.match(new RegExp(`^<@!?${client.user.id}>( |)$`))) {
       
       const embedhelpwupusxd = new Discord.MessageEmbed()
             .setTitle(`¿Me habeís mencionado?`)
             .setDescription(`
             ${emojijson.hola} Hola, soy Wumpus Gamer, un Bot multifuncional,
             con comandos innovadores & útiles. - ${prefix}
     
             **¿Cómo veo los comandos?**
             Para ver los comandos usa \`${prefixtwo}help\` o \`@Wumpus Gamer help\`
             
             **¿Cómo estableco un lenguaje?** (Aún no está terminado)
             puedes hacerlo con \`${prefixtwo}setlang\` o \`@Wumpus Gamer setlang\`
             
             **Nécesito ayuda!**
             Puedes contartarnos atraves de la [Web](https://wumpusgamer.ml) o por el [Discord](https://wumpusgamer.ml/discord/).
     
             **Encontre un bug/fallo, ¿Cómo lo puedo reportar?**
             Fácil, usando \`${prefixtwo}bug <Bug>\` recuerda que si usas mal este comando puedes ser sancionado.
     
             **Estado**
             En este momento estoy casi listo, me falta mi comando setlang, y problamente se cambie el comando help.
             Por lo tanto estoy en mentenimiento.
             `)
             .setColor("RANDOM")
             .setImage("https://cdn.discordapp.com/attachments/840601853330849792/871172173635682325/NICEEMBED.gif")
             .setFooter("Puede que no funcione..")
     
       message.channel.send(embedhelpwupusxd)
       }
 
   if (!message.content.startsWith(prefix)) return;
 
   let args = message.content.slice(prefix.length).trim().split(' ');
   let command = args.shift().toLowerCase();
   let cmd = client.commands.get(command) || client.commands.find(xs => xs.alias && xs.alias.includes(command)); //alias ["alias"], || alias [],
 
   if (!command) return;
 
   let language = dbq.fetch(`setlang_${message.guild.id}`)
 
   if (language === null) {
       language = require("../lenguages/es.js")
    }
 
   if (language === "es") {
     language = require("../lenguages/es.js")
   }
 
   if (language === "en") {
     language = require("../lenguages/en.js")
   }
 
   if (language === "cat") {
     language = require("../lenguages/cat.js")
   }
   
 
 client.lang = language; 
 client.emojis = emojijson;
 
 const getdate = now = new Date().toLocaleString();
 const embednice = new Discord.MessageEmbed()
 .setTitle("Alguien uso este bot :0")
 .setDescription(`
 **Servidor** \`${message.guild || "Ninguno"}\`
 **Servidor ID** \`${message.guild.id || "Ninguno"}\`
 **Autor mensaje** \`${message.author.tag || "Ninguno"}\`
 **Autor mensaje ID** \`${message.author.id || "Ninguno"}\`
 **Comando** \`${message.content || "Ninguno"}\`
 **Canal** \`<#${message.channel.id || "Ninguno"}>\`
 `)
 .setColor("RANDOM")
 .setFooter(getdate)
 .setThumbnail(message.author.displayAvatarURL())
 client.channels.cache.get('889286423193210910').send(embednice)
 
     const emmbednoexistcomadnoxd = new Discord.MessageEmbed()
     .setDescription(`${client.lang.unkowcmd}`)
     .setColor("RED")
 
     if (!cmd) return message.channel.send(emmbednoexistcomadnoxd)
 
     if (blacklist.tiene(message.author.id)) {
 const embedblacklistfxd = new Discord.MessageEmbed()
 .setTitle(`${emojijson.no} **ERROR**`)
 .setThumbnail('https://i.pinimg.com/originals/ec/43/5f/ec435fc3a8276bb20eca6a72d89efe7b.gif')
 .setColor("RED")
 .addField(`${client.lang.ucantusewumpus}`, `⠀`)
 .addFields(
 { name: '\u200B', value: '\u200B' },
 { name: 'Info', value: 'https://wumpusgamer.ml/documentacion/blacklist/', inline: true },
 { name: 'Discord', value: 'https://discord.gg/QP7us4Z3y5', inline: true },
 { name: 'Web', value: 'https://wumpusgamer.ml/apelar/', inline: true },
 )
 return message.channel.send(embedblacklistfxd)
     } 
 
      process.once("unhandledRejection", (reason, promise) => {
        const embed = new Discord.MessageEmbed() 
        .setTitle("Oh...")
        .setDescription(client.lang.error)
        .setColor("RED")
        //message.channel.send(embed)

       const getdate = now = new Date().toLocaleString();
         const canaluno = client.channels.cache.get("888214966866436176")
         const canaldos = client.channels.cache.get("888214966866436176")
           const embederr = new Discord.MessageEmbed()
           .setTitle(`Ocurrió un error ❌`)
           .setThumbnail(message.guild.iconURL())
           .setDescription(`
           **Servidor** \`${message.guild || "Ninguno"}\`
           **Servidor ID** \`${message.guild.id || "Ninguno"}\`
           **Autor mensaje** \`${message.author.tag || "Ninguno"}\`
           **Autor mensaje ID** \`${message.author.id || "Ninguno"}\`
           **Comando** \`${message.content || "Ninguno"}\`
           **Canal** \`<#${message.channel.id || "Ninguno"}>\`
           \`\`\`js
           ${reason.stack}
           \`\`\`
           `)
           .setColor("RED")
           .setFooter(`${getdate} - Hora España`) 
          return canaluno.send(embederr) && message.channel.send(embed)
    
         });
 
  if(cmd) {
     cmd.run(client, message, args)
 }
   }); 
 }