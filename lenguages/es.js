const emojijs = require("../emojis.json");
let respuestas = ["En mi opinion, si","Es cierto","Probablemente", "Todo apunta a que si","Sin duda","Si","Definitivamente","Debes confiar en ello","Respuesta vaga, vuelve a intentarlo","Pregunta en otro momento","Sera mejor que no te lo diga ahora","No puedo predecirlo ahora","Concentrate y vuelve a preguntar","Puede ser","No cuentes con ello","Mi respuesta es no","Mis fuentes me dicen que no","Las perspectivas no son buenas","Muy dudoso","¡Claro Que sí!", "ARA ARA :flushed:"]
module.exports = {

    ucantusewumpus: `${emojijs.no} No puedes usar Wumpus, estás en la Blacklist`,
    unkowcmd: `${emojijs.no} Comando desconocido.`,
    thanksxvip: `${emojijs.si} Gracias por ser un usuario Gold.`, 
    usernopermissions: `${emojijs.no} No tienes permisos para ejecutar este comando.`,
    botnopermissions: `${emojijs.no} Yo no tengo permisos\n Por favor dame el permiso **Administrador**.`,
    jerarquiaroleup: `${emojijs.no} Mi rol debe estar arriba de.`,
    jearquiayourroleup: `${emojijs.no} Tú rol debe estar arriba de.`,
    membernovoicechannel: `${emojijs.no} Debes estar en un canal de voz.`,
    nonsfwchannel: `${emojijs.no} Debes estar en un canal nsfw :flushed:`,
    onlystaffteam: `${emojijs.no} Debes ser de el Staff de Wumpus Gamer para hacer eso.`,
    songsend: `${emojijs.si} Las canciones terminaron, salgo.`,
    nosongsplaying: `${emojijs.no} No hay nada reproduciendo en el servidor.`,
    error: `${emojijs.no} Se produjo un error, ya se ha informado, se solucionará lo más rápido posible.`,
    needvip: `Este es un comando de Wumpus Gold, más información en https://wumpusgamer.ml/gold/`,
    onlynumbers: `${emojijs.no} Sólo se permiten números.`,
    noqueue: `${emojijs.no} No hay canciones en la cola.`,
    nosongtoskip: `${emojijs.no} No hay canciones que pueda saltar.`,
    playlistnotfound: `${emojijs.no} PlayList no encontrada.`,
    playlistadded: `${emojijs.si} La PlayList ha sido agregada.`,
    songaddedtoqueue: `${emojijs.si} La canción ha sido agregada a la cola.`,
    nomention: `${emojijs.no} Debes mencionar a un usuario.`,
    jerahehavemoreperms: `${emojijs.no} Él/Ella tiene más permisos que tú.`,
    jerahehavemorebotperms: `${emojijs.no} El/ella tiene más permisos que yo.`,
    jera_rol_moreup_bot: `${emojijs.no} El rol es más alto en la jerarquía que el mío.`,
    notsaytime: `${emojijs.no} Debes especificar el tiempo.`,
    notespecify: `${emojijs.no} No especifico.`,
    nomentionrole: `${emojijs.no} Debes mencionar un rol.`,
    nomentionchannel: `${emojijs.no} Debes mencionar un canal válido.`,
    language: `Lenguaje`,
    
    moderation_better: `Los comandos de moderación se están mejorando`,
    eco_desativated: `Los comandos de economía estarán desactivados para mejorarlos...`,

    //addrole
    addr_therole: `${emojijs.si} El rol`,
    addr_to: `ha sido agregado correctamente a`,

    //announcement
    annc_notsayann: `${emojijs.no} Debes decir el nuevo aviso.`,
    annc_you_re_sure: `Estás seguro de mandar el aviso a `,
    annc_announcment: `Aviso`,
    annc_sendto: `${emojijs.si} Aviso enviado a `,
    annc_cancel: `${emojijs.no} Aviso cancelado.`,

    //Setname 
    setn_needname: `${emojijs.no} Debes especificar tú nombre\nUso correcto \`w!setname [Nombre]\``,
    setn_yournameis: `${emojijs.si} Ahora, tú nombre es`,
    setn_name: `Nombre`,
    setn_notconfigured: `${emojijs.no} No tienes un perfil configura, puedes hacerlo con \`w!setname [Nombre]\``,

    //Poll
    poll_nopollsay: `${emojijs.no} Uso incorrecto, uso \`w!poll [Titulo] + Opción 1 + Opción 2\``,

    //removerole
    remrol_donthave: `${emojijs.no} El usuario no tiene ese rol.`,
    remrol_therol: `${emojijs.si} El rol`,
    remrol_removed: `ha sido removido de`,

    //Settings 
    setts_configof: `Configuraciones de`,

    //backupcreate
    bcp_creating: `${emojijs.loadingcyan} Creando el backup...`,
    bcp_created: `${emojijs.si} El backup se ha creado correctamente.`,
    bcp_lookmd: `Mira tus mds.`,
    bcp_guild: `Servidor`,
    bcp_toload: `Para cargar el backup usa`,

    //backupinfo
    bcpi_noprovideid: `${emojijs.no} Proporciona una id válida.`,
    bcpi_information: `Backup ID`,
    bcpi_server: `Servidor`,
    bcpi_notfound: `${emojijs.no} Copia de seguridad no encontrada`,
    bcpi_size: `Tamaño`,
    bcpi_createdat: `Creado el`,

    //backupload
    bcpl_noprovideid: `${emojijs.no} Proporciona una id válida.`,
    bcpl_warning: `Cuando se cargue la copia de seguridad, **se reemplazarán todos los canales, roles, etc.**\nReacciona con ✅ para confirmar.`,
    bcpl_timeend: `${emojijs.no} El tiempo se acabo, he cancelado la carga de el backup.`,
    bcpl_loading: `${emojijs.si} Se está cargando el backup...`,

    //Setprefix
    sp_notsaynew: `${emojijs.no} ¿Cuál sera el nuevo Prefix?`,
    sp_nowis: `${emojijs.si} Now the prefix is`,

    //8ball
    ochoball_replys: `${respuestas[(Math.floor(Math.random() * respuestas.length))]}`,
    ochoball_uquestion: `Preguntaste`,
    ochoball_noquestion: `¿Qué quieres preguntar?`,
    ochoball_myreply: `Mi respuesta`,

    //Change my mind
    cmym_noprivdetxt: `${emojijs.no} Debes proporcionar un texto.`,
    cmym_loading: `${emojijs.loadingcyan} Cargando...`,

    //Clyde
    clyde_noprovidetxt: `${emojijs.no} Debes proporcionar un texto.`,

    //color 
    color_notsay: `${emojijs.no} Debes poner un color en Hexadecimal, por ejemplo \`w!color #ff8615\``,

    //eject 
    eject_expulsedto: `Ha expulsado a`,
    eject_ifnotseen: `¿La imágen no se ve? Click aquí.`,

    //lisa
    lisa_noprovidetxt: `${emojijs.no} Debes proporcionar un texto.`,

    //Rps 
    rps_incorrectuse: `Use thus\n \`w!rps stone/paper/scissor\``,
    rps_invalidoption: `Invalid option.`,

    //wanted
    wanted_talvez: `${emojijs.no} Tal vez quisiste decir\n \`w!wanted 1\``,

    //Angry
    angry_are: `Está enojado >:(`,

    ///FIX

    //Bored
    bored_are: `Está aburrido`,

    //Kill
    kill_haskilled: `Ha matado a`,

    //kiss
    kiss_gavehima: `Le ha dado un beso a`,

    //lick
    lick_haslickedto: `Ha lamido a`, 

    //punch
    punch_gaspunchedto: `Ha golpeado`,

    //run
    run_running: `Está corriendo`,

    //head
    head_usrnopremium: `${emojijs.no} El usuario no es premium.`,
    head_notvalidusr: `${emojijs.no} El usuario no es válido.`,

    //minecraftserver
    mcsv_noprovideid: `${emojijs.no} Proporciona una ip válida. (En Bedrock espcifica el puerto)`,
    mcsv_notfound: `${emojijs.no} No puedo encontrar ese servidor.`,
    mcsv_port: `Puerto`,
    mcsv_status: `Estado`,
    mcsv_version: `Versión`,
    mcsv_ping: `Ping actual`,
    mcsv_currentplayes: `Jugadores actuales`,
    mcsv_maxplayers: `Máximo de jugadores`,
    mcsv_pingnotdetermine: `No se puede determinar`,
    mcsv_description: `Descripción`,

    //robloxav
    robxav_noprovidename: `${emojijs.no} Proporciona un nombre válido.`,
    robxab_notfound: `${emojijs.no} Usuario no encontrado.`,

  //skin
  skin_notsayname: `${emojijs.no} Debes decir el nombre.`,
  skin_of: `Skin de`,

  //Loop 
  loop_is: `${emojijs.disco} El se encuentra`,
  loop_on: `activado`,
  loop_off: `desactivado`,

  //lyrics 
  lyrics_notfound: `${emojijs.no} Letra no encontrada.`,
  lyrics_ly: `Letra -`,
  lyrics_page: `Página`,
  lyrics_page_of: `de`,

  //Nowplaying
  np_title: `${emojijs.flecha_derecha_animada} Título`,
  np_duration: `${emojijs.flecha_derecha_animada} Duración`,
  np_reqby: `${emojijs.flecha_derecha_animada} Pedida por`,
  np_vc: `${emojijs.flecha_derecha_animada} Canal de voz`,

  //pause
  pause_paused: `${emojijs.disco} La música se ha pausado.`,

  //play
  play_whatsong: `${emojijs.no} Debes poner una canción (Nombre o link).`,
  play_notfoundyt: `${emojijs.no} No puedo encontrar la canción en YouTube.`,
  play_notfoundcs: `${emojijs.no} No puedo encontrar la canción en SounCloud.`,
  play_addedtoqueue: `${emojijs.si} Canción añadida a la cola.`,
  play_np: `Ahora reproduciendo`,

  //Playlist
  playlist_notprovidelink: `${emojijs.no} Debes proporcionar el link de la PlayList.`,
  playlist_added: `${emojijs.si} PlayList agregada.`,
  playlist_notfound: `${emojijs.no} PlayList no encontrada.`,
  playlist_addedtitle: `${emojijs.si} PLayList añadida a la cola.`,
  playlist_name: `Nombre`,
  playlist_duration: `Duración`,
  playlist_reqby: `Pedida por`,
  playlist_nowplayingq: `Ahora reproduciendo`,

  //queue
  queue_title: `Cola`,
  queue_np: `Ahora reproduciendo`,
  queue_vc: `Canal de voz`,
  queue_page: `Página 1 de`, 

  //remove
  remove_incorrectuse: `${emojijs.no} Uso incorrecto\nw!remove [Numero canción]`,
  remove_ucant: `${emojijs.no} No puedes hacer eso...`,
  remove_was: `${emojijs.no} Fue removida de la cola.`,

  //resume
  resume_resmued: `${emojijs.disco} Canción resumida.`,

  //search
  search_noprovidesrc: `${emojijs.no} Debes proporcionar el nombre de la canción.`,
  search_notfound: `${emojijs.no} No puedo encontrar la canción`,
  search_results: `Resultados de`,
  search_typeto: `Escribe el número de la canción para añadirla a la cola`,
  search_ratelimit: `No has seleccionado nada en 30 segundos, búsqueda cancelada.`,
  search_added: `${emojijs.si} La canción ha sido añadida a la cola.`,
  search_name: `Nombre`,
  search_duration: `Duración`,
  search_reqby: `Pedida por`,
  search_nowplaying: `Ahora reproduciendo`,

  //skip
  skip_resumed: `${emojijs.disco} Música resumida.`,

  //skipto
  skipto_incorrectuse: `${emojijs.no} Debes poner un numero.`,
  skipto_ucant: `${emojijs.no} No puedes saltarte 0 canciones..`,
  skipto_skipped: `${emojijs.disco} Me he saltado a la canción`,

  //volume
  volume_is: `${emojijs.disco} El volumen es`,
  volume_novalid: `${emojijs.no} Sólo puedes poner el volumen entre 0/150.`,
  volume_now: `${emojijs.disco} El volumen ahora es`,

  //edit 
  edit_provideid: `${emojijs.no} Proporciona una ID de mensaje válida.`,
  edit_noprovidewinners: `${emojijs.no} Proporciona una cantindad de ganadores válida.`,
  edit_nogw: `${emojijs.no} Proporciona el nombre de el sorteo.`,
  edit_ok: `${emojijs.si} El sorteo se editara en 5 segundos.`,

  //end 
  end_noptivideid: `${emojijs.no} Debes proporcionar una id de mensaje válida.`,
  end_notfound: `${emojijs.no} Sorteo no encontrado.`,
  end_ok: `El sorteo se va a editar en`,
  end_seconds: `segundos.`,
  end_alreadyend: `El sorteo`,
  end_over: `ya termino.`,
  end_ok: `${emojijs.si} El sorteo`,
  end_finished: `se ha terminado`,

  //reroll
  reroll_noprovideid: `${emojijs.no} Debes proporcionar una id de mensaje válida.`,
  reroll_notfound: `${emojijs.no} No puedo encontrar ese sorteo.`,
  reroll_done: `${emojijs.si} Sorteo rerolled.`,
  reroll_idk: `El sorteo con el id`,
  reroll_idktwo: `No tiene fin..`,

  //start
  start_chnotfound: `${emojijs.no} Canal no encontrado.`,
  start_usage: `Uso`,
  start_channel: `Canala`,
  start_time: `Tiempo`,
  start_winners: `Ganadores`,
  start_giveaway: `Sorteo`,
  start_notime: `${emojijs.no} Tiempo no válido.`,
  start_nowinners: `${emojijs.no} Ganadores no válidos.`,
  start_nogiveaway: `${emojijs.no} Proporciona el sorteo.`,
  start_lack: `Falta`,
  start_react: `Reacciona con 🎉 para participar!`,
  start_congrulations: `Felicidades,`,
  start_win: `Gano`,
  start_nobody: `Nadie ha participado en el sorteo`,
  start_hostedby: `Hostedeado por`,
  start_finished: `Se terminó hace`,
  start_seconds: `Segundos`,
  start_minutes: `Minutos`,
  start_hours: `Horas`,
  start_days: `Días`,
  start_started: `${emojijs.si} Perfecto, inicie`,
  start_in: `en`,
  
  //addemoji 
  addemoji_nourl: `${emojijs.no} Proporciona una url válida.`,
  addemoji_noname: `${emojijs.no} Debes poner un nombre.`,
  addemoji_lenght: `${emojijs.no} La cantidad máxima de caracteres es de 15.`,
  addemoji_done: `${emojijs.si} Emoji añadido correctamente.`,

  //allbots
  allbots_total: `Total de Bots`,

  //ascii
  ascii_lenght: `${emojijs.no} La cantidad máxima es de 80 caracteres..`,
  ascii_notxt: `${emojijs.no} Debes proporcionar un texto.`,

  //avatar
  avatar_from: `Avatar de`,


  //banner
  banner_donthave: `${emojijs.no} El usuario no tiene banner.`,
  banner_from: `Banner de`,

  //covid
  covid_preventions: `:small_blue_diamond: Lávese las manos con frecuencia\n:small_blue_diamond: Uso de gel antibacteriano\n:small_blue_diamond: Uso de alcohol \n:small_blue_diamond: Para toser o estornudar, use un pañuelo de papel \n:small_blue_diamond: Evite el contacto directo con personas con síntomas de tos y gripe\n:small_blue_diamond: Quédate en casa`,
  covid_noprovidename: `${emojijs.no} Escriba el nombre del país para buscar información sobre Covid-19.`,
  covid_cases: `Casos del país`,
  covid_cases_totals: `Casos totales`,
  covid_cases_critices: `Casos criticos`,
  covid_today: `Casos de hoy`,
  covid_totals_deats: `Muertes hoy`,
  covid_recupereds: `Recuperados`,
  covid_preventionss: `Prevenciones`,
  covid_deaths_today: `Muertes hoy`,
  covid_notfound: `${emojijs.no} País no válido, sólo Inglés.`,
  
  //embed (secret command)
  embed_if: `Si aparece este mensaje es porque tienes algo muy importante, qué decir... ||ELLA NO TE AMA, NI TE AMARÁ.||`,
  embed_footer: `Excepto si invita a Wumpus a su servidor 👌`,

  //emoji
  emoji_noname: `${emojijs.no} Debes proporcionar un emoji.`,
  emoji_onlyserver: `${emojijs.no} Sólo emojis del servidor.`,
  emoji_cantindentify: `${emojijs.no} Emoji no encontrado.`,
  emoji_information: `Información del emoji`,
  emoji_identifier: `Indentificador`, 

  //finduser
  finduser_noprovidename: `${emojijs.no} Debes proporcionar un nombre a buscar.`,
  finduser_notfound: `${emojijs.no} Lo siento, no encontré ningún usuario con ese nombre.`,


  //github
  github_noprovideuser: `${emojijs.no} Proporcionar un usuario válido.`,
  github_notfound: `${emojijs.no} Lo siento, usuario no entrado.`,
  github_from: `Github de`,
  github_user: `Usuario`,
  github_id: `ID`,
  github_biography: `Biografía`,
  github_ubication: `Ubicación`,
  github_createdAt: `Cuenta creada el`,
  github_repositories: `Repositorios`,
  github_followers: `Seguidores`,
  github_follwing: `Siguiendo`,

  //Invites
  invites_donthave: `${emojijs.no} No tiene invites.`,
  invites_from: `Invite's de`,
  invites_persons_inviteds: `Personas invitadas`,
  invites_have: `Actualmente tienes`,
  invites_havetwo: `regular, **0** salieron, **0** fake.`,

  //ping
  ping_is: `Ping Web Socket`,

  //qr
  qr_noprovidetext: `${emojijs.no} Debes proporcionar un texto.`,

  //roleinfo
  roleinfo_nomention: `${emojijs.no} Debes mencionar un rol válido.`,
  roleinfo_information: `Información de el rol`,
  roleinfo_id: `ID`,
  roleinfo_name: `Nombre`,
  roleinfo_hex_color: `Código Hexadecimal`,
  roleinfo_in_members: `Miembros que lo tienen`,
  roleinfo_position: `Posición`,
  roleinfo_mentionable: `Mencionable`,

  //say
  say_notext: `${emojijs.no} Debes proporcionar un texto.`,
  say_contain_spam: `${emojijs.no} El mensaje contiene spam :/`,

  //servericon
  servericon_from: `Icono del servidor`,

  //serverinfo

  //setsugget
  setsuggest_done: `${emojijs.no} Las sugerencias se enviarán a`,

  //snipe
  snipe_nomessage: `${emojijs.no} No se ha eliminado ningún mensaje recientemente.`,

  //suggest
  suggest_noconfigured: `${emojijs.no} No hay ningún canal configurado, use \`w!setsuggest\` para configurarlo.`,
  suggest_noprovide: `${emojijs.no} Debes proporcionar la sugerencia.`,
  suggest_send: `${emojijs.si} Sugerencia enviada.`,
  suggest_new: `Nueva sugerencia`,

  //Userinfo
  userinfo_information: `Información de`,
  userinfo_user: `Usuario`,
  userinfo_tag: `Tag`,
  userinfo_id: `ID`,
  userinfo_nick: `Nick`,
  userinfo_joinAt: `Se unio el`,
  userinfo_createdAt: `Cuenta creada en`,

  //botinfo
  botinfo_information: `Infiormación de Wumpus Gamer`,
  botinfo_developers: `${emojijs.dev} Desarolladores`,
  botinfo_administrators: `${emojijs.robloxian} Administradores`,
  botinfo_moderators: `${emojijs.shield} Moderadores`,
  botinfo_status: `${emojijs.wb_working} [Estado](https://wumpusgamer.ml/status/)`,
  botinfo_web: `:globe_with_meridians: [Web](https://wumpusgamer.ml)`,
  botinfo_livechat: `${emojijs.chat} [Chat en vivo](https://www.tidio.com/talk/wumpusgamer)`,
  botinfo_staff_team: `${emojijs.wb_nitro} [Staff Team](https://wumpusgamer.ml/team/)`,
  botinfo_appeal: `${emojijs.blob_ban} [Apelar](https://wumpusgamer.ml/apelar/)`,
  botinfo_support: `${emojijs.blob_discord} [Servidor de Discord](https://wumpusgamer.ml)`,
  botinfo_vps: `${emojijs.server} Hosting una vps`,
  botinfo_librery: `${emojijs.library} Librería Discord.JS 12.5.3`,
  botinfo_statsvps: `Estadísticas de la vps`,
  botinfo_os: `${emojijs.gnu} Sistema operativo Linux - Ubuntu`,
  botinfo_days: `Días`,
  botinfo_hours: `Horas`,
  botinfo_minutes: `Minutos`,
  botinfo_seconds: `Segundos`,
  botinfo_stats_wumpus: `Estadísticas de Wumpus`,
  botinfo_servers: `${emojijs.server} Servidores`,
  botinfo_users: `:busts_in_silhouette: Usuarios`,

  //bug
  bug_wahtis: `${emojijs.no} Debes proporcionar el bug/fallo.`,
  bug_done: `${emojijs.no} Reporte enviado, gracias por su reporte.`,

  //fabithost
  fabithost_title: `¿Buscas un Hosting de buena calidad?`,
  fabithost_message: `Pues, te presento a  **Fabithost** ${emojijs.fabitnormal} (14.5K users.)
  Que tiene soporte para varios juegos y otros,
  Algunos de ellos son **Minecraft Java**, **Minecraft Bedrock**, **FiveM**, **SAMP**, & **others**.`,
  fabithost_discord: `Servidor de Discord <https://discord.gg/fabithost>`,
  fabithost_portal: `Portal https://portal.fabithost.com`,
  fabithost_panel: `Panel <https://panel.fabithost.com>`,

  //info - Don't there, only spanish command. 

  //invite
  invite_title: `Invita a Wumpus a tú servidor`,
  invite_add: `Para añadirme a tú servidor`,
  invite_click: `Click aquí`,

  //reglas
  reglas_web: `[Click aquí para verlo en la web.](https://wumpusgamer.ml/tos/)`,

  //hubbix
  hubbix: `Unete ahora al mejor Hotel!\nhttps://discord.gg/TFfdY3kV4x`,
  
  //reportuser
  reportuser_usage: `${emojijs.no} Uso incorrecto\nUso correcto\`w!reportuser [Nombre] [ID] [Razón] [Prueba 1] {Prueba 2} {Prueba 3} {Prueba 4}\``,
  reportuser_noprovideid: `${emojijs.no} Proporciona una ID válida.`,
  reportuser_noreason: `${emojijs.no} Proporciona una razón válida.`,
  reportuser_notests: `${emojijs.no} Proporciona pruebas válidas.`,
  reportuser_done: `${emojijs.si} Reporte enviendo, gracias por su reporte.`,

  //embedsay
  embedsay_containspam: `${emojijs.no} No tienes permisos para poner un embed con links.`,
  embedsay_notxt: `${emojijs.no} Debes poner el texto, para ponerlo en el embed.\nUso \`w!embedsay Título + Texto.\``,

  //archivement
  archivement: `Nuevo logro`,
  archivement_notxt: `${emojijs.no} Debes proporcionar el texto.`,
  archivement_lenght: `${emojijs.no} El texto no puede ser mayor a 22.`,

  //anime
  anime_noprovide: `${emojijs.no} Debes proporcionar el nombre, para buscarlo.`,
  anime_results: `Resultados de`,
  anime_en_premiried: `Estrano en`, 
  anime_en_title: `Título Inglés`, 
  anime_ja_title: `Título Japone`, 
  anime_ranked: `Clasificación`, 
  anime_duration: `Duración`, 
  anime_broadcast: `Trasmitido en`, 
  anime_episodes: `Episodios`, 
  anime_status: `Estado`, 
  anime_gen: `Genero`, 
  anime_type: `Típo`, 
  anime_rating: `Opiniones`, 
  anime_onair: `Al aire en`, 
  anime_popularity: `Popularidad`, 
  anime_members: `Miembros`, 
  anime_stats: `Estadísticas de puntuación`, 
  anime_source: `Fuente`,
  anime_score: `Puntuación`,
  anime_favorites: `Favoritos`,
  anime_studio: `Estudio`,
  anime_synonyms: `Sínonimo`,
  anime_status: `Estado`,
  anime_link: `Link`,

  //tweet 
  tweet_nosaytxt: `${emojijs.no} Debes proporcionar el texto para Tweetearlo!`,

  //phcomment_nosaytxt
  phcomment_nosaytxt: `${emojijs.no} Debes proporcionar el texto para hacerlo.`,
}