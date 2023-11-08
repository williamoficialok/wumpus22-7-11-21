const Discord = require('discord.js')
const { MessageMenuOption, MessageMenu } = require('discord-buttons')

module.exports = {
    nombre: "help",
    alias: ["commands", "comandos", "cmds", "bot-commands"],
    description: "Comando de ayuda.",
    category: "Información.",
    cooldown: "",
    usage: "\`<prefix>help\`",
    nsfw: "",
    permissions: "",
    gold: "",

    run: async (client, message, args) => {
        const embedprincipal = new Discord.MessageEmbed()
        .setTitle("Menú principal")
        .setDescription(`
        **¡Hola!** soy Wumpus Gamer
        
        Este es mi menú de comandos, haz click en unas de ellas para ver todos mis comandos!
        `)
        .setColor("RANDOM")
    
        const embedadmnistracion = new Discord.MessageEmbed()
        .setDescription(`
        **addrole**
        **removerole**
        **announcement**
        **removeroleall**
        **roleall**
        **poll**
        **settings**
        `)
        .setColor("RANDOM")
    
        const embedproteccion = new Discord.MessageEmbed()
        .setDescription(`
        **backupcreate**
        **backupload**
        **backupinfo**
        `)
        .setColor("RANDOM")
    
        const embedconfiguracion = new Discord.MessageEmbed()
        .setDescription(`
        **setlang**
        **setlogs** [D]
        **setprefix**
        **setsuggest**
        `)
        .setColor("RANDOM")
    
        const embeddiversion = new Discord.MessageEmbed()
        .setDescription(`
        **8ball**
        **achivement**
        **aki**
        **awesomephoto**
        **batslap**
        **beautiful**
        **blur**
        **captcha**
        **cat**
        **changemymind**
        **circle**
        **clyde**
        **color**
        **confudedstonks**
        **deleteimage**
        **discordblank**
        **discordblue**
        **dontaffect**
        **doublestonks**
        **egg**
        **eject**
        **face**
        **frame**
        **gay**
        **grayscale**
        **hack**
        **hitler**
        **ikiss**
        **invert**
        **jail**
        **karaba**
        **lisa**
        **meme**
        **notstonks**
        **painter**
        **picture**
        **qepd**
        **quote**
        **sepia**
        **spank**
        **stonks**
        **trash**
        **triggered**
        **wanted**
        **wasted**
        `)
        .setColor("RANDOM")
    
        const embedeconomia = new Discord.MessageEmbed()
        .setDescription(`
        ${client.lang.eco_desativated}
        `)
        .setColor("RANDOM")
    
        const embedinteraccion = new Discord.MessageEmbed()
        .setDescription(`
        **angry**
        **bored**
        **kill**
        **kiss**
        **lick**
        **pat**
        **punch**
        **run**
        `)
        .setColor("RANDOM")
    
        const embedjuegos = new Discord.MessageEmbed()
        .setDescription(`
        **battle**
        **youtube**
        **betrayal**
        **chess**
        **fishing**
        **poker**
        **head**
        **minecraftserver**
        **robloxav**
        **skin**
        `)
        .setColor("RANDOM")
    
        const embedmoderacion = new Discord.MessageEmbed()
        .setTitle(client.lang.moderation_better)
        .setDescription(`
        **ban**
        **banlist**
        **clear**
        **detect**
        **forceban**
        **hackban**
        **kick**
        **lock**
        **mute**
        **muterole**
        **nuke**
        **setnick**
        **slowmode**
        **tempban**
        **unban**
        **unlock**
        **unmute**
        **warn**
        **warnings**
        **unwarn**
        **voicedefean**
        **voicekick**
        **voicemove**
        **voicemute**
        **voiceundefean**
        **voiceunmute**
        `)
        .setColor("RANDOM")
    
        const embedmusica = new Discord.MessageEmbed()
        .setDescription(`
        **loop**
        **lyrics**
        **nowplaying**
        **pause**
        **play**
        **playlist**
        **queue**
        **remove**
        **resume**
        **search**
        **skip**
        **skipto**
        **stop**
        **volume**
        `)
        .setColor("RANDOM")
        
        const embednsfw = new Discord.MessageEmbed()
        .setDescription(`
        **4k**
        **anal**
        **ass**
        **boobs**
        **erokemo**
        **gonewwild**
        **hentai**
        **hentaiass**
        **hentaithigh**
        **hmidriff**
        **kitsune**
        **lewd**
        **neko**
        **nekofeet**
        **nekotits**
        **porngif**
        **pussy**
        **random**
        **rule34**
        **solo**
        **thigh**
        `)
        .setColor("RANDOM")
    
        const embedsorteo = new Discord.MessageEmbed()
        .setDescription(`
        **start**
        **end**
        **reroll**
        **edit**
        `)
        .setColor("RANDOM")
    
        
        const embedutils = new Discord.MessageEmbed()
        .setDescription(`
        **addemoji**
        **allbots**
        **anime**
        **ascii**
        **avatar**
        **banner**
        **covid**
        **embed**
        **embedsay**
        **emoji**
        **emojify**
        **finduser**
        **github**
        **invites**
        **qr**
        **randomchannel**
        **randomrole**
        **randomuser**
        **roleinfo**
        **userinfo**
        **say**
        **servericon**
        **serverinfo**
        **snipe**
        **suggest**
        `)
        .setColor("RANDOM")
    
        const embedvip = new Discord.MessageEmbed()
        .setDescription(`
        a
        `)
        .setColor("RANDOM")
    
        const embedwumpus = new Discord.MessageEmbed()
        .setDescription(`
        **botinfo**
        **bug**
        **fabithost**
        **help**
        **hubbix**
        **info**
        **invite**
        **ping**
        **reglas**
        **reportuser**
        **support**
        **web**
        `)
        .setColor("RANDOM")
    
        const embedstaffteam = new Discord.MessageEmbed()
        .setTitle("Sólo poner ID")
        .setDescription(`
        \`\`\`
        addblacklist addforceban addvip bash docs 
        eval npm off reboot removeblacklist removevip
        \`\`\`
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

        //Opciones menú\\

        let opcion1 = new MessageMenuOption()

        .setEmoji("871193992765771786")
        .setValue("1")
        .setLabel("Administración")
        .setDescription("Comandos de administración")

        let opcion2 = new MessageMenuOption()

        .setEmoji("871211369075187762")
        .setValue("2")
        .setLabel("Protección")
        .setDescription("Comandos de protección")

        let opcion3 = new MessageMenuOption()

        .setEmoji("869478203230670889")
        .setValue("3")
        .setLabel("Configuración")
        .setDescription("Comandos de configuración")

        let opcion4 = new MessageMenuOption()

        .setEmoji("871220252229390396")
        .setValue("4")
        .setLabel("Diversión")
        .setDescription("Comandos de diversión")

        let opcion5 = new MessageMenuOption()

        .setEmoji("868708902508855326")
        .setValue("5")
        .setLabel("Economía")
        .setDescription("Comandos de economía")

        let opcion6 = new MessageMenuOption()

        .setEmoji("871220334832005162")
        .setValue("6")
        .setLabel("Interacción")
        .setDescription("Comandos de interacción")

        let opcion7 = new MessageMenuOption()

        .setEmoji("871213164946141204")
        .setValue("7")
        .setLabel("Juegos")
        .setDescription("Comandos de juegos")

        let opcion8 = new MessageMenuOption()

        .setEmoji("868625982557421568")
        .setValue("8")
        .setLabel("Moderación")
        .setDescription("Comandos de moderación")

        let opcion9 = new MessageMenuOption()

        .setEmoji("860704670456348723")
        .setValue("9")
        .setLabel("Música")
        .setDescription("Comandos de música")

        let opcion10 = new MessageMenuOption()

        .setEmoji("871213897502294036")
        .setValue("10")
        .setLabel("Nsfw")
        .setDescription("Comandos de nsfw")

        let opcion11 = new MessageMenuOption()

        .setEmoji("868708938634391653")
        .setValue("11")
        .setLabel("Sorteos")
        .setDescription("Comandos de sorteos")

        let opcion12 = new MessageMenuOption()

        .setEmoji("869473173589078016")
        .setValue("12")
        .setLabel("Útiles")
        .setDescription("Comandos útiles")

        let opcion13 = new MessageMenuOption()

        .setEmoji("871223541905903627")
        .setValue("13")
        .setLabel("Wumpus Gold")
        .setDescription("Comandos para usuarios con wumpus gold")

        let opcion14 = new MessageMenuOption()

        .setEmoji("869477949836001331")
        .setValue("14")
        .setLabel("Wumpus")
        .setDescription("Comandos de wumpus")

        let opcion15 = new MessageMenuOption()

        .setEmoji("869478772238352395")
        .setValue("15")
        .setLabel("Staff Team (Wumpus)")
        .setDescription("Comandos de Team Wumpus")

        let opcion16 = new MessageMenuOption()

        .setEmoji("868632182086860822")
        .setValue("16")
        .setLabel("Información Wumpus Gamer")
        .setDescription("Información del bot")

        let opcion17 = new MessageMenuOption()

        .setEmoji("868627399431057479")
        .setValue("17")
        .setLabel("Menú principal")
        .setDescription("Vuelve al menú de ayuda principal")

        let menu = new MessageMenu()

        .setID("50")
        .setPlaceholder("Click aquí")
        .addOption(opcion1)
        .addOption(opcion2)
        .addOption(opcion3)
        .addOption(opcion4)
        .addOption(opcion5)
        .addOption(opcion6)
        .addOption(opcion7)
        .addOption(opcion8)
        .addOption(opcion9)
        .addOption(opcion10)
        .addOption(opcion11)
        .addOption(opcion12)
        .addOption(opcion13)
        .addOption(opcion14)
        .addOption(opcion15)
        .addOption(opcion16)
        .addOption(opcion17)

        const msg = await message.channel.send(embedprincipal, menu)

        const filter = (menu) => menu.clicker.id === message.author.id;
        const collector = msg.createMenuCollector(filter, { time: 50000 })

        collector.on('collect', (menu) => {
            if(menu.values[0] === '1'){
                menu.reply.defer()
                return menu.message.edit(embedadmnistracion)
            }
            if(menu.values[0] === '2'){
                menu.reply.defer()
                return menu.message.edit(embedproteccion)
            }
            if(menu.values[0] === '3'){
                menu.reply.defer()
                return menu.message.edit(embedconfiguracion)
            }
            if(menu.values[0] === '4'){
                menu.reply.defer()
                return menu.message.edit(embeddiversion)
            }
            if(menu.values[0] === '5'){
                menu.reply.defer()
                return menu.message.edit(embedeconomia)
            }
            if(menu.values[0] === '6'){
                menu.reply.defer()
                return menu.message.edit(embedinteraccion)
            }
            if(menu.values[0] === '7'){
                menu.reply.defer()
                return menu.message.edit(embedjuegos)
            }
            if(menu.values[0] === '8'){
                menu.reply.defer()
                return menu.message.edit(embedmoderacion)
            }
            if(menu.values[0] === '9'){
                menu.reply.defer()
                return menu.message.edit(embedmusica)
            }
            if(menu.values[0] === '10'){
                menu.reply.defer()
                return menu.message.edit(embednsfw)
            }
            if(menu.values[0] === '11'){
                menu.reply.defer()
                return menu.message.edit(embedsorteo)
            }
            if(menu.values[0] === '12'){
                menu.reply.defer()
                return menu.message.edit(embedutils)
            }
            if(menu.values[0] === '13'){
                menu.reply.defer()
                return menu.message.edit(embedvip)
            }
            if(menu.values[0] === '14'){
                menu.reply.defer()
                return menu.message.edit(embedwumpus)
            }
            if(menu.values[0] === '15'){
                const onlystaff = new Discord.MessageEmbed()
                .setDescription(`${client.lang.onlystaffteam}`)
                .setColor("RED")
              if(!client.config.Staff_Team_IDS.some(idsstaff => message.author.id == idsstaff)) return message.channel.send(onlystaff); 
                menu.reply.defer()
                return menu.message.edit(embedstaffteam)
            }
            if(menu.values[0] === '16'){
                menu.reply.defer()
                return menu.message.edit(embedinfo)
            }
            if(menu.values[0] === '17'){
                menu.reply.defer()
                return menu.message.edit(embedprincipal)
            }
        });

    }
}