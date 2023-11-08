const Discord = require('discord.js');
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "newhelp",
  alias: [],
  run: async (client, message, args) => {


    //////////////EMBEDS///////////
    const embedloading = new Discord.MessageEmbed()
    .setTitle("Cargando...")
    .setDescription(`**${emojijson.loading} \`|\` Por favor, espere a que se cargen las reacciones**`)
    .setColor("RANDOM")

    const embedprincipal = new Discord.MessageEmbed()
    .setTitle("Menu principal.")
    .setDescription(`
    ${emojijson.admin} ➪ Administración 
    ${emojijson.shield} ➪ Protección 
    ${emojijson.wb_working} ➪ Configuración 
    ${emojijson.au_dance} ➪ Diversión
    ${emojijson.coin} ➪ Economía
    ${emojijson.random_waifu} ➪ Interacción
    ${emojijson.wb_gamer} ➪ Juegos
    ${emojijson.blob_ban} ➪ Moderación
    ${emojijson.disco} ➪ Música
    ${emojijson.hot} ➪ Nsfw
    ${emojijson.giveawey} ➪ Sorteos
    ${emojijson.blobneonrgb} ➪ Útiles
    ${emojijson.wumpus_rich} ➪ Wumpus Gold
    ${emojijson.wb_love} ➪ Wumpus
    ${emojijson.wb_nitro} ➪ Staff Team (De wumpus)

    ${emojijson.no} ➪ Menu principal
    `)
    .setColor("RANDOM")

    const embedadmnistracion = new Discord.MessageEmbed()
    .setTitle("Comandos | Administración")
    .setDescription(`
    **addrole** \`|\` Agrega un rol a un usuario.
    **removerole** \`|\` Remueve un rol a un usuario.
    **roleall** \`|\` Dale un rol a todos los usuarios.
    **removeroleall** \`|\` Remueve un rol a todos los usuarios.
    **aviso** \`|\` Envia un aviso a un canal.
    **poll** \`|\` Hace una encuesta.
    `)
    .setColor("RANDOM")

    const embedproteccion = new Discord.MessageEmbed()
    .setTitle("Comandos | Protección")
    .setDescription(`
    **backupcreate** \`|\` Crea una copia de seguridad de tu servidor.
    **backupinfo** \`|\` Muestra información de una copia de seguridad.
    **backupload** \`|\` Carga una copia de seguridad.
    `)
    .setColor("RANDOM")

    const embedconfiguracion = new Discord.MessageEmbed()
    .setTitle("Comandos | Configuración")
    .setDescription(`
    **setlang** \`|\` En desarollo.
    **setlogs** \`|\` Establece un canal para guardar registros de tu servidor.
    **setprefix** \`|\` Cambia el prefix de el bot.
    `)
    .setColor("RANDOM")

    const embeddiversion = new Discord.MessageEmbed()
    .setTitle("Comandos | Diversión")
    .setDescription(`
    **8ball** \`|\` Haz una pregunta, & te la respondo.
    **awesomephoto** \`|\` Muetra una foto increible.
    **clyde** \`|\` Muestra una foto de Clyde con el texto qué quieras.
    **quote** \`|\` Imita a otro usuario con el texto qué quieras.
    **eject** \`|\` Expulsa a un usuario de la Nave (Amoung Us).
    **hack** \`|\` Hackea a un usuario.
    **meme** \`|\` Muestra memes aleatorios.
    **profile** \`|\` En desarollo.
    **rps** \`|\` Juega piedra paper o tijera.
    `)
    .setColor("RANDOM")

    const embedeconomia = new Discord.MessageEmbed()
    .setTitle("Comandos | Economía")
    .setDescription(`
    **bal** \`|\` Ve cuanto dinero tienes (En el banco & en la mano).
    **daily** \`|\` Reclama tú recompenza diaría.
    **deposit** \`|\` Deposita dinero al Banco.
    **Work** \`|\` Trabaja para ganar dinero.
    `)
    .setColor("RANDOM")

    const embedinteraccion = new Discord.MessageEmbed()
    .setTitle("Comandos | Intearcción")
    .setDescription(`
    **angry** \`|\` Muestra una expresión enojad@.
    **bored** \`|\` Muestra una expresión aburrid@.
    **kill** \`|\` Mata a alguien D:
    **kiss** \`|\` Besa a alguien :flushed:
    **lick** \`|\` Lame a alguien.
    **punch** \`|\` Golpea a alguien >:(
    **run** \`|\` Correeeee.
    `)
    .setColor("RANDOM")

    const embedjuegos = new Discord.MessageEmbed()
    .setTitle("Comandos | Juegos")
    .setDescription(`
    **betrayal** \`|\` Juega Betrayal.io en Discord.
    **chess** \`|\` Juega ajedrez en Discord.
    **fishing** \`|\` Juega fishing.io en Discord.
    **poker** \`|\` Juega a las cartas en Discord.
    **youtube** \`|\` Ve Youtube en Discord.
    **robloxav** \`|\` Muestra un avatar de Roblox.
    **head** \`|\` Ve la cabeza de un jugador de Minecraft Java.
    **minecraftserver** \`|\` Nuestra inforamción de un servidor de Minecraft Java.
    `)
    .setColor("RANDOM")

    const embedmoderacion = new Discord.MessageEmbed()
    .setTitle("Comandos | Moderación")
    .setDescription(`
    **ban** \`|\` Banea a un usuario.
    **banlist** \`|\` Muestra la lista de baneados.
    **clear** \`|\` Elimina mensajes.
    **forceban** \`|\` Banea usuarios maliciosos (Cómo raiders, Tóxicos & demás).
    **hackban** \`|\` Banea un usuario por id (No es necesario que el usuario este en el servidor).
    **kick** \`|\` Expulsa a un usuario.
    **lock** \`|\` Bloquea un canal.
    **unlock** \`|\` Desbloquea un canal.
    **mute** \`|\` Silencia un usuario por texto.
    **muterole** \`|\` Configura el rol para el usuario a mutear.
    **nuke** \`|\` Elimina el canal & lo vuelve a crear.
    **setnick** \`|\` Establece un apodo a un usuario.
    **slowmode** \`|\` Pon el canal en modo pausado.
    **unban** \`|\` Desbanea a un usuario.
    **unmute** \`|\` Desactiva el silencio a un usuario.
    **unwarn** \`|\` Quitale una advertencia a un usuario.
    **voicedefean** \`|\` Ensordece a un usuario de Voz.
    **voicekick** \`|\` Expulsa a un usuario de voz.
    **voicemove** \`|\` Mueve a un usuario de canal de Voz.
    **voicemute** \`|\` Silencia un usuario por Voz.
    **voiceundeefan** \`|\` Quitale el silencio a un usuario.
    **voiceunmute** \`|\` silencia a un usuario por texto.
    **warn** \`|\` Advierte a algien.
    **warns** \`|\` Ve los warns que tiene.
    `)
    .setColor("RANDOM")

    const embedmusica = new Discord.MessageEmbed()
    .setTitle("Comandos | Música - Youtube")
    .setDescription(`
    **play** \`|\` Reproduce una canción.
    **playlist** \`|\` Reproduce una PlayList.
    **loop** \`|\` Controla si la canción se repetira.
    **lyrics** \`|\` Obten la letra de una canción.
    **nowplaying** \`|\` Ve qué se está reproduciendo.
    **pause** \`|\` Pausa la canción qué se está reproduciendo.
    **resume** \`|\` Resume una canción pausada.
    **queue** \`|\` Ve la lista de canciones por reproducir.
    **remove** \`|\` Remueve una canción de la lista de canciones.
    **search** \`|\` En mantenimiento.
    **skip** \`|\` Salta a la siguiente canción.
    **skipto** \`|\` Saltate a una canción de la lista de canciones.
    **stop** \`|\` Deten la música.
    **volume** \`|\` Controla el volumen de la canción.
    `)
    .setColor("RANDOM")
    
    const embednsfw = new Discord.MessageEmbed()
    .setTitle("Comandos | Nsfw :flushed:")
    .setDescription(`
    ||**4K**|| \`|\` ||Muestra una foto 4K :flushed:||
    ||**anal**|| \`|\` ||Pues su nombre lo dice ¬¬||
    ||**neko**|| \`|\` ||Obten una foto random de una neko.||
    ||**random**|| \`|\` ||Obten una foto random.||
    ||**rule34**|| \`|\` ||Hace una busqueda en Rule34.||
    `)
    .setColor("RANDOM")

    const embedsorteo = new Discord.MessageEmbed()
    .setTitle("Comandos | Sorteos")
    .setDescription(`
    **start** \`|\` Comienza un sorteo.
    **edit** \`|\` Edita un sorteo ya hecho.
    **end** \`|\` Forza a terminar un sorteo.
    **reroll** \`|\` Escoge un ganador aleatoriamente de nuevo.
    `)
    .setColor("RANDOM")

    const embedutils = new Discord.MessageEmbed()
    .setTitle("Comandos | Útiles")
    .setDescription(`
    **addemoji** \`|\` Añade un emoji mediante un link.
    **allbots** \`|\` Muestra una lisa con todos los Bots del servidor.
    **ascii** \`|\` Genera un texto ASCII.
    **avatar** \`|\` Muestra tú avatar o el de otra persona.
    **covid** \`|\` Muestra casos Covid-19 de un país (Inglés).
    **embed** \`|\` Un comando secreto.
    **emoji** \`|\` Hace un jump a un amigo.
    **finduser** \`|\` Encuentra a un usuario sin mencionarlo.
    **github** \`|\` Muestra la información de un usuario de GitHub.
    **google** \`|\` Busca algo.
    **ping** \`|\` Muestra el ping del bot.
    **poll** \`|\` Hace una encuesta.
    **qr** \`|\` Genera un código QR con un texto/enlance.
    **rank** \`|\` En desarollo.
    **roleinfo** \`|\` Muestra información de un rol.
    **say** \`|\` Repito lo que tú quieras.
    **servericon** \`|\` Muestra el icono del servidor.
    **serverinfo** \`|\` Muestra informacion del servidor.
    **ss** \`|\` Toma captura a una web.
    **setsuggest** \`|\` Configura el canal de sugerencias.
    **userinfo** \`|\` Ve la información de un usuario.
    `)
    .setColor("RANDOM")

    const embedvip = new Discord.MessageEmbed()
    .setTitle("Comandos | Wumpus Gold")
    .setDescription(`
    **volume** \`|\` Controla el volumen de la canción.
    **soyvip** \`|\` Sólomante demuestra qué tienes Wumpus Gold.
    **reactionrole** \`|\` Configura un rol por reacción [Pronto...].
    **vipcommands** \`|\` Muestra todos los comandos de Wumpus Gold.
    `)
    .setColor("RANDOM")

    const embedwumpus = new Discord.MessageEmbed()
    .setTitle("Comandos | Wumpus Gamer")
    .setDescription(`
    **botinfo** \`|\` Ve mi información cómo desarolladores, admins etc.
    **fabithost** \`|\` Hosting Gratis / Free Hosting.
    **bug** \`|\` Reporta un bug para qué me ayudes a mejorarme =)
    **cmds** \`|\` Muestra comandos de una categoría.
    **help** \`|\` Muestra todos los comandos.
    **oldhelp** \`|\` Muestra el antiguo help.
    **invite** \`|\` Invitame a tú servidor.
    **reglas** \`|\` Mis reglas qué debes seguir!.
    **reportuser** \`|\` Reporta a un usuario malicioso cómo Raiders, Tóxicos, etc.
    **support** \`|\` Unete al Discord de Wumpus para recivir ayuda.
    **team** \`|\` Mira los desarolladores.
    **updates** \`|\` Mira que hay de nuevo en esta nueva actualización.
    **vip** \`|\` Información acerca de Wumpus Gold.
    **web** \`|\` Muestra la web de Wumpus.
    `)
    .setColor("RANDOM")

    const embedstaffteam = new Discord.MessageEmbed()
    .setTitle("Comandos | Staff wumpus Gamer")
    .setDescription(`
    **addblacklist** \`|\` Añade a alguien a la Blacklist.
    **removeblacklist** \`|\` Quita a alguien de la Blacklist.
    **addvip** \`|\` Dale Wumpus Gold a un usuario.
    **removevip** \`|\` Quitale Wumpus Gold a un usuario.
    **bash** \`|\` Ejecuta comandos de la terminal de Wumpus.
    **docs** \`|\` Busca documentación de Discord.Js V12.
    **eval** \`|\` Evalua código.
    **off** \`|\` Apaga Wumpus.
    **reboot** \`|\` Reinicia todo Wumpus.
    **addmoderator** \`|\` Añade un moderador.
    **removemoderator** \`|\` Remueve a un Moderador de Wumpus.
    `)
    .setColor("RANDOM")

    const embedinfo = new Discord.MessageEmbed()
    .setTitle("Wumpus Gamer!")
    .setDescription(`
[Click aquí para invitarme](https://wumpusgamer.ml/invite/)
Dashboard pronto
[Estado mantenimiento](https://wumpusgamer.ml/status/)
    `)
    .setColor("RANDOM")
    .setImage("https://cdn.discordapp.com/attachments/840601853330849792/871172173635682325/NICEEMBED.gif")
    //////////////////CONFIG/////////////////////

    message.channel.send(embedloading).then(msg => { //Enviamos el embed de cargando con then, para que cuando se termine de cargar edite al embed embedprincipal.
        msg.react("871193992765771786")              //Admin - Admin - 871193992765771786
        msg.react("871211369075187762")              //Protección - Shield - 871211369075187762
        msg.react("869478203230670889")              //Configuración - wb_working - 869478203230670889
        msg.react("871220252229390396")              //Diversión - Au_dance - 871220252229390396
        msg.react("868708902508855326")              //Economía - wb_coin - 868708902508855326
        msg.react("871220334832005162")              //Interacción - Waifu_random - 871220334832005162
        msg.react("871213164946141204")              //Juegos - wumpusgamer - 871213164946141204
        msg.react("868625982557421568")              //Moderación - Blob_Ban - 868625982557421568
        msg.react("860704670456348723")              //Música - Rolas - 860704670456348723
        msg.react("871213897502294036")              //Nsfw - wb_Hot - 871213897502294036
        msg.react("868708938634391653")              //Sorteos - Sorteos - 868708938634391653
        msg.react("869473173589078016")              //Utils - blobneon - 869473173589078016
        msg.react("871223541905903627")               //Wumpus Gold - wb_rich - 871223541905903627
        msg.react("869477949836001331")              //Wumpus - wb_love - 869477949836001331
        msg.react("869478772238352395")              //Staff team - wb_nitro - 869478772238352395
        msg.react("868632182086860822")               //Info bot - warning - 868632182086860822
        msg.react("868627399431057479").then(m => {  //Reaccionamos con el emoji No con then para
          msg.edit(embedprincipal)                   //que cuando lo presione lo edite a embed principal. - emoji no

          msg.awaitReactions((reaction, user) => {
          if(message.author.id !== user.id) return reaction.users.remove(user.id);  //Si la id de el que reacciona no es igual al del autor del mensaje retornamos que elimine la reacción de el mensaje. 
            reaction.users.remove(user.id)           //Removemos la reacción una vez reaccione.

            //Qué acción sucedera cuando se reaccione con X emoji.

            if(reaction.emoji.id === '871193992765771786'){ //Admin - Admin - 871193992765771786
              msg.edit(embedadmnistracion)
            }
            if(reaction.emoji.id === '871211369075187762'){ //Protección (Backup folder) - Shield - 871211369075187762
              msg.edit(embedproteccion)
            }
            if(reaction.emoji.id === '869478203230670889'){ //Configuración - wb_working - 869478203230670889
              msg.edit(embedconfiguracion)
            }
            if(reaction.emoji.id === '871220252229390396'){ //Diversión - Au_dance - 871220252229390396
              msg.edit(embeddiversion)
            }
            if(reaction.emoji.id === '868708902508855326'){ //Economía - wb_coin - 868708902508855326
              msg.edit(embedeconomia)
            }
            if(reaction.emoji.id === '871220334832005162'){ //Interacción - Waifu_random - 871220334832005162
              msg.edit(embedinteraccion)
            }
            if(reaction.emoji.id === '871213164946141204'){  //Juegos - wumpusgamer - 871213164946141204
              msg.edit(embedjuegos)
            }
            if(reaction.emoji.id === '868625982557421568'){  //Moderación - Blob_Ban - 868625982557421568
              msg.edit(embedmoderacion)
            }
            if(reaction.emoji.id === '860704670456348723'){  //Música - Rolas - 860704670456348723
              msg.edit(embedmusica)
            }
            if(reaction.emoji.id === '871213897502294036'){  //Nsfw - wb_Hot - 871213897502294036
              msg.edit(embednsfw)
            }
            if(reaction.emoji.id === '868708938634391653'){  //Sorteos - Sorteos - 868708938634391653
              msg.edit(embedsorteo)
            }
            if(reaction.emoji.id === '869473173589078016'){  //Utils - blobneon - 869473173589078016
              msg.edit(embedutils)
            }
            if(reaction.emoji.id === '871223541905903627'){  //Wumpus Gold - wb_rich - 871223541905903627
              msg.edit(embedvip)
            }
            if(reaction.emoji.id === '869477949836001331'){ //Wumpus - wb_love - 869477949836001331
              msg.edit(embedwumpus)
            }
            if(reaction.emoji.id === '869478772238352395'){ //Staff team - wb_nitro - 869478772238352395
              msg.edit(embedstaffteam)
            }

            //Principal menu
            if(reaction.emoji.id === '868627399431057479'){ //no - 868627399431057479
              msg.edit(embedprincipal)
            }
            //Info bot (Links, y otros)
            if(reaction.emoji.id === '868632182086860822'){ //Info bot - warning - 868632182086860822
              msg.edit(embedinfo)
            }

         })
      })
   })
 }
}