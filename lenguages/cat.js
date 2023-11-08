const emojijs = require("../emojis.json");
let respotes = ["En la meva opinió, si", "És cert", "Probablement", "Tot apunta que si", "Sens dubte", "Si", "Definitivament", "Has de confiar en això", " Resposta vaga, torna a intentar-ho "," Pregunta en un altre moment "," Sera millor que no t'ho digui ara "," no puc predir ara "," Concentrate i torna a preguntar "," Pot ser "," no expliquis amb això "," La meva resposta és no "," Les meves fonts em diuen que no "," Les perspectives no són bones "," Molt dubtós "," és clar que sí! "," ARA ARA :flushed:"]

module.exports = {

   ucantusewumpus: `${emojijs.no} No pots fer servir Wumpus, ets a la Blacklist`,
   unkowcmd: `${emojijs.no} Comando desconegut.`,
   thanksxvip: `${emojijs.si} Gracies per ser gold.`,
   usernopermissions: `${emojijs.no} No teniu permisos per executar aquesta ordre.`,
   notsaynewprefix: `${emojijs.no} Digueu-me un nou prefix.`,
   botnopermissions: `${emojijs.no} No tinc permisos.`,
   jerarquiaroleup: `${emojijs.no} El meu paper ha de ser superior a.`,
   jearquiayourroleup: `${emojijs.no} El vostre paper ha de ser superior a`,
   membernovoicechannel: `${emojijs.no} Heu d’estar en un canal de veu.`,
   nonsfwchannel: `${emojijs.no} Heu d'estar al canal nsfw :flushed:`,
   onlystaffteam: `${emojijs.no} Heu de formar part del personal de Wumpus Gamer per poder fer això.`,
   songsend: `${emojijs.no} Les cançons s’han acabat, surto.`,
   nosongsplaying: `${emojijs.no} No hi ha res jugant en aquest servidor.`,
   error: `${emojijs.no} S'ha produït un error, ja s'ha informat, se solucionarà el més ràpid possible.`,
   needvip: `${emojijs.no} Aquest és un comandament de Wumpus Gold, informació de mode a https://wumpusgamer.ml/gold/`,
   onlynumbers: `${emojijs.no} Només es permeten números.`,
   noqueue: `${emojijs.no} No hi ha cançons a la cua.`,
   nosongtoskip: `${emojijs.no} No hi ha cançons que puc saltar.`,
   playlistnotfound: `${emojijs.no} No s'ha trobat la llista de reproducció.`,
   playlistadded: `${emojijs.si} S'ha afegit la llista de reproducció.`,
   songaddedtoqueue: `${emojijs.si} La cançó s'ha afegit a la cua.`,
   nomention: `${emojijs.no} Heu d’esmentar-ho a un usuari vàlid`,
   jerahehavemoreperms: `${emojijs.no} Té més o menys permisos que vosaltres.`,
   jerahehavemorebotperms: `${emojijs.no} Té més o el mateix permís que jo.`,
   notsaytime: `${emojijs.no} Heu d’especificar una hora.`,
   notespecify: `${emojijs.no} No especificar.`,
   nomentionrole: `${emojijs.no} Heu d’esmentar un paper.`,
   nomentionchannel: `${emojijs.no} Heu d'esmentar un canal vàlid.`,
   language: `Language`,

   moderation_better: `Les ordres de moderació són cada vegada millors`,
   eco_desativated: `Les comandes d'economia estaran desactivats per millorar-los...`,

   //addrole
   addr_therole: `${emojijs.si} El paper`,
   addr_to: `Ha estat agregat correctament a`,

   //announcement
   annc_notsayann: `${emojijs.no} Has de dir el nou avís.`,
   annc_you_re_sure: `Segur enviar l'avís a `,
   annc_announcment: `Avís`,
   annc_sendto: `${emojijs.si} Avís enviat a `,
   annc_cancel: `${emojijs.no} Avís cancel lat.`,

   //Setname 
   setn_needname: `${emojijs.no} Has d'especificar tu nom\nús correcte \`w!setname [Nom]\``,
   setn_yournameis: `${emojijs.si} Ara, tu nombre es`,
   setn_name: `Nom`,
   setn_notconfigured: `${emojijs.no} No tens un perfil configurat, pots fer-ho amb \`w!setname \``,

   //Poll
   poll_nopollsay: `${emojijs.no} Ús incorrecte, ús \`w!poll [Títol] + Opció 1 + Opció 2\``,

   
  //removerole
  remrol_donthave: `${emojijs.no} L'usuari no té aquesta paper.`,
  remrol_therol: `${emojijs.si} El paper`,
  remrol_removed: `ha estat remogut de`,

  //Settings 
  setts_configof: `Configuracions de`,

  //backupcreate
  bcp_creating: `${emojijs.loadingcyan} Creant el backup...`,
  bcp_created: `${emojijs.si} La còpia de seguretat es va crear correctament.`,
  bcp_lookmd: `Mira les teves mds.`,
  bcp_guild: `Servidor`,
  bcp_toload: `Per carregar el backup fa servir`,

  //backupinfo
  bcpi_noprovideid: `${emojijs.no} Proporciona una id vàlida.`,
  bcpi_information: `Backup ID`,
  bcpi_server: `Servidor`,
  bcpi_notfound: `${emojijs.no} Backup no trobada.`,
  bcpi_size: `Mida`,
  bcpi_createdat: `Creat el`,
  
  //backupload
  bcpl_noprovideid: `${emojijs.no} Proporciona una id vàlida.`,
  bcpl_warning: `Quan es carregui la còpia de seguretat, **es reemplaçaran tots els canals, papers, etc.**\nReacciona amb ✅ per confirmar.`,
  bcpl_timeend: `${emojijs.no} El temps es va acabar, he cancel·lat la càrrega de la còpia de seguretat.`,
  bcpl_loading: `${emojijs.si} S'està carregant el backup.`,

  //Setprefix
  sp_notsaynew: `${emojijs.no} ¿Quin serà el nou prefix?`,
  sp_nowis: `${emojijs.si} Ara el prefix és`,

  //8ball
  ochoball_replys: `${respotes[(Math.floor(Math.random() * respotes.length))]}`,
  ochoball_uquestion: `Vas preguntar`,
  ochoball_noquestion: `Què vols preguntar?`,
  ochoball_myreply: `La meva resposta`,

  //Change my mind
  cmym_noprivdetxt: `${emojijs.no} Heu de proporcionar un text.`,
  cmym_loading: `${emojijs.loadingcyan} Carregant...`,

  //Clyde
  clyde_noprovidetxt: `${emojijs.no} Heu de proporcionar un text.`,

  //color 
  color_notsay: `${emojijs.no} Heu de posar un color en hexadecimal, per exemple \`w!color #ff8615\``,

  //eject 
  eject_expulsedto: `Ha expulsat`,
  eject_ifnotseen: `La imatge no es veu? Click aquí.`,

  //lisa
  lisa_noprovidetxt: `${emojijs.no} Heu de proporcionar un text.`,
  
  //Rps 
  rps_incorrectuse: `Use thus\n \`w!rps stone/paper/scissor\``,
  rps_invalidoption: `Invalid option.`,
 
  //wanted
  wanted_talvez: `${emojijs.no} Potser voldríeu dir-ho\n \`w!wanted 1\``,

  //Angry
  angry_are: `aquesta enutjat >:(`,


  //FIX

  //Bored
  bored_are: `Astà avorrit`,

  //Kill
  kill_haskilled: `Ha matat a`,

  //kiss
  kiss_gavehima: `Ha fet un petó a`,

  //lick
  lick_haslickedto: `Ha llepat a`, 

  //punch
  punch_gaspunchedto: `Ha colpejat a`,

  //run
  run_running: `Aquesta corrent`,

  //head
  head_usrnopremium: `${emojijs.no} L'usuari no és premium.`,
  head_notvalidusr: `${emojijs.no} L'usuari no és vàlid`,

  //minecraftserver
  mcsv_noprovideid: `${emojijs.no} Proporciona una ip vàlida. (A Bedrock especificar port)`,
  mcsv_notfound: `${emojijs.no} No vaig poder trobar aquest servidor.`,
  mcsv_port: `Port`,
  mcsv_status: `Estat`,
  mcsv_version: `Versió`,
  mcsv_ping: `Tennis actual`,
  mcsv_currentplayes: `Jugadors actuals`,
  mcsv_maxplayers: `Màxim de jugadors`,
  mcsv_pingnotdetermine: `No és possible determinar`,
  mcsv_description: `Descripció`,

  //robloxav
  robxav_noprovidename: `${emojijs.no} Proporciona un nom vàlid.`,
  robxab_notfound: `${emojijs.no} Usuari no trobat.`,

  //skin
  skin_notsayname: `${emojijs.no} Has dir el nom.`,
  skin_of: `Skin de`,

  //Loop 
  loop_is: `${emojijs.disco} El loop es troba`,
  loop_on: `habilitat.`,
  loop_off: `dehabilitado`,

  //lyrics 
  lyrics_notfound: `${emojijs.no} Lletra no trobada.`,
  lyrics_ly: `Lietra -`,
  lyrics_page: `pàgina`,
  lyrics_page_of: `de`,

  //Nowplaying
  np_title: `${emojijs.flecha_derecha_animada} Títol`,
  np_duration: `${emojijs.flecha_derecha_animada} Duració`,
  np_reqby: `${emojijs.flecha_derecha_animada} Demanada per`,
  np_vc: `${emojijs.flecha_derecha_animada} Canal de veu`,

  //pause
  pause_paused: `${emojijs.disco} La música ha estat pausada.`,

  //play
  play_whatsong: `${emojijs.no} Has de posar una cançó (Títol o link).`,
  play_notfoundyt: `${emojijs.no} No puc trobar la cançó a YouTube.`,
  play_notfoundcs: `${emojijs.no} No puc trobar la cançó a SoundCloud.`,
  play_addedtoqueue: `${emojijs.si} Cançó afegida a la cua.`,
  play_np: `Ara reproduint`,

  //Playlist
  playlist_notprovidelink: `${emojijs.no} Has de posar el link de la PlayList.`,
  playlist_added: `${emojijs.si} PlayList afegida.`,
  playlist_notfound: `${emojijs.no} PlayList no trobada.`,
  playlist_addedtitle: `${emojijs.si} PlayList afegida a la cua.`,
  playlist_name: `Títol`,
  playlist_duration: `Duració`,
  playlist_reqby: `Demanada per`,
  playlist_nowplayingq: `Ara reproduint`,

  //queue
  queue_title: `Cua`,
  queue_np: `Ara reproduint`,
  queue_vc: `Canal de veu`,
  queue_page: `Pàgina 1'd`, 

  //remove
  remove_incorrectuse: `${emojijs.no} Ús incorrecte\nw!remove [Cançó nombre]`,
  remove_ucant: `${emojijs.no} No pots fer això...`,
  remove_was: `${emojijs.no} Va ser remoguda de la cua.`,

  //resume
  resume_resmued: `${emojijs.disco} cançó resumida!`,

  //search
  search_noprovidesrc: `${emojijs.no} Heu de proporcionar un nom de la cançó.`,
  search_notfound: `${emojijs.no} No trobo la cançó.`,
  search_results: `Resultats de`,
  search_typeto: `Escriviu el número de la cançó seleccionada per afegir-la a la cua`,
  search_ratelimit: `No heu seleccionat res en 30 segons, la cerca s'ha cancel·lat.`,
  search_added: `La cançó s'ha afegit a la cua.`,
  search_name: `Títol`,
  search_duration: `Duració`,
  search_reqby: `Sol licitada per`,
  search_nowplaying: `Ara jugant`,

  //skip
  skip_resumed: `${emojijs.disco} Cançó resumiad.`,

  //skipto
  skipto_incorrectuse: `${emojijs.no} Heu de posar un número.`,
  skipto_ucant: `${emojijs.no} No es poden ometre 0 cançons...`,
  skipto_skipped: `${emojijs.disco} He saltat a la cançó.`,

  //volume
  volume_is: `${emojijs.disco} El volum és`,
  volume_novalid: `${emojijs.no} Només podeu posar el volum entre 0/150.`,
  volume_now: `${emojijs.disco} El volum ara és`,

  //edit 
  edit_provideid: `${emojijs.no} Proporcioneu un identificador de missatge vàlid.`,
  edit_noprovidewinners: `${emojijs.no} Proporcioneu els guanyadors vàlids.`,
  edit_nogw: `${emojijs.no} Proporcioneu un obsequi vàlid.`,
  edit_ok: `${emojijs.si} L’obsequi s'editarà en 5 segons.`,

  //end 
  end_noptivideid: `${emojijs.no} Heu de proporcionar un identificador de missatge vàlid.`,
  end_notfound: `${emojijs.no} No s'ha trobat l’obsequi.`,
  end_ok: `L'obsequi S'editarà dins`,
  end_seconds: `segons.`,
  end_alreadyend: `L’obsequi`,
  end_over: `ja s'ha acabat`,
  end_ok: `L’obsequi`,
  end_finished: `s'ha acabat`,

  //reroll
  reroll_noprovideid: `${emojijs.no} Heu de proporcionar un identificador vàlid.`,
  reroll_notfound: `${emojijs.no} No puc trobar aquest obsequi.`,
  reroll_done: `${emojijs.si} El regal es va tornar a llançar.`,
  reroll_idk: `El regal amb l’identificador`,
  reroll_idktwo: `No té final`,

  //start
  start_chnotfound: `${emojijs.no} No s'ha trobat el canal.`,
  start_usage: `Ús`,
  start_channel: `Canal`,
  start_time: `Temps`,
  start_winners: `Guanyadors`,
  start_giveaway: `regal`,
  start_notime: `${emojijs.no} Hora no vàlida.`,
  start_nowinners: `${emojijs.no} Els guanyadors no són vàlids.`,
  start_nogiveaway: `${emojijs.no} El regal no és vàlid.`,
  start_lack: `Manca`,
  start_react: `Reacciona amb 🎉 per participar!`,
  start_congrulations: `Enhorabona,`,
  start_win: `Guanyat`,
  start_nobody: `Ningú no va participar al sorteig`,
  start_hostedby: `Organitzat per`,
  start_finished: `Es va acabar fa`,
  start_seconds: `Segons`,
  start_minutes: `Minuts`,
  start_days: `Dies`,
  start_started: `${emojijs.si} Perfecte, vaig començar`,
  start_in: `dins`,
  
  //addemoji 
  addemoji_nourl: `${emojijs.no} Proporcioneu un URL vàlid.`,
  addemoji_noname: `${emojijs.no} Heu de posar un nom.`,
  addemoji_lenght: `${emojijs.no} La quantitat màxima és de 15 caràcters.`,
  addemoji_done: `${emojijs.si} Emoji afegit correctament.`,

  //allbots
  allbots_total: `Total de Bots`,

  //ascii
  ascii_lenght: `${emojijs.no} La quantitat màxima és de 80 caràcters.`,
  ascii_notxt: `${emojijs.no} Heu de proporcionar un text.`,

  //avatar
  avatar_from: `Avatar de`,


  //banner
  banner_donthave: `${emojijs.no} L'usuari no té cap bàner.`,
  banner_from: `Banner de`,

  //covid
  covid_preventions: `:small_blue_diamond: Renteu-vos les mans amb freqüència\n:small_blue_diamond: Ús de gel antibacterià\n:small_blue_diamond: Ús d'alcohol\n:small_blue_diamond: Per tossir o esternudar feu servir un teixit\n:small_blue_diamond: Eviteu el contacte directe amb persones amb símptomes de tos i grip\n:small_blue_diamond: Quedeu-vos a casa`,
  covid_noprovidename: `${emojijs.no} Escriviu el nom del país per cercar informació sobre Covid-19.`,
  covid_cases: `Casos del país`,
  covid_cases_totals: `Total de casos`,
  covid_cases_critices: `Casos crítics`,
  covid_today: `Avui casos`,
  covid_totals_deats: `Avui les morts`,
  covid_recupereds: `Recuperats`,
  covid_preventionss: `Prevencions`,
  covid_deaths_today: `Avui les morts`,
  covid_notfound: `${emojijs.no} País no vàlid, només anglès.`,
  
  //embed (secret command)
  embed_if: `Si aquest missatge apareix perquè té alguna cosa molt important, què diuen... ||NO T’ESTIMA, TAMBÉ T’ESTIMARÀ.||`,
  embed_footer: `Excepte si convideu el bot al vostre servidor 👌`,

  //emoji
  emoji_noname: `${emojijs.no} Heu de proporcionar un emoji.`,
  emoji_onlyserver: `${emojijs.no} Només emojis del servidor.`,
  emoji_cantindentify: `${emojijs.no} Emoji no trobat.`,
  emoji_information: `Informació dels emoji`,
  emoji_identifier: `Identificar`, 

  //finduser
  finduser_noprovidename: `${emojijs.no} Heu de proporcionar un nom.`,
  finduser_notfound: `${emojijs.no} Ho sento, no he trobat cap usuari amb aquest nom.`,


  //github
  github_noprovideuser: `${emojijs.no} Proporcioneu un usuari vàlid.`,
  github_notfound: `${emojijs.no} Ho sento, no s'ha trobat l'usuari.`,
  github_from: `Github de`,
  github_user: `Usuari`,
  github_id: `ID`,
  github_biography: `Biografia`,
  github_ubication: `Ubicació`,
  github_createdAt: `Compte creat a`,
  github_repositories: `Dipòsits`,
  github_followers: `Seguidors`,
  github_follwing: `Seguint`,

  //Invites
  invites_donthave: `${emojijs.no} No tinguis invitacions.`,
  invites_from: `La invitació és de`,
  invites_persons_inviteds: `Persones convidades`,
  invites_have: `Actualment ho tens`,
  invites_havetwo: `regular, **0** va sortir, **0** fals.`,

  //ping
  ping_is: `Ping missatge`,

  //qr
  qr_noprovidetext: `${emojijs.no} Heu de proporcionar un text.`,

  //roleinfo
  roleinfo_nomention: `${emojijs.no} Heu d’esmentar un rol vàlid.`,
  roleinfo_information: `Informació del paper`,
  roleinfo_id: `ID`,
  roleinfo_name: `Nom`,
  roleinfo_hex_color: `Codi hexadecimal`,
  roleinfo_in_members: `Membres que en són propietaris`,
  roleinfo_position: `Posició`,
  roleinfo_mentionable: `Menció`,

  //say
  say_notext: `${emojijs.no} Heu de proporcionar un text.`,
  say_contain_spam: `${emojijs.no} El missatge conté missatge sppam`,

  //servericon
  servericon_from: `Server icon de`,

  //serverinfo - Soon -_-

  //setsugget
  setsuggest_done: `${emojijs.si} S’enviaran suggeriments a`,

  //snipe
  snipe_nomessage: `${emojijs.no} No s’ha suprimit cap missatge recentment`,

  //suggest
  suggest_noconfigured: `${emojijs.no} No hi ha cap canal definit, utilitzeu-lo \`w!setsuggest\` per configurar-lo.`,
  suggest_noprovide: `${emojijs.no} Heu de proporcionar el suggeriment.`,
  suggest_send: `${emojijs.si} El suggeriment s'ha enviat correctament.`,
  suggest_new: `Nou suggeriment`,

  //Userinfo
  userinfo_information: `Informació de`,
  userinfo_user: `Usuari`,
  userinfo_tag: `Etiqueta`,
  userinfo_id: `ID`,
  userinfo_nick: `Efecte`,
  userinfo_joinAt: `Inscrit a`,
  userinfo_createdAt: `Compte creat a`,

  //botinfo
  botinfo_information: `Informació de Wumpus Gamer`,
  botinfo_developers: `${emojijs.dev} Desenvolupadors`,
  botinfo_administrators: `${emojijs.robloxian} Administradors`,
  botinfo_moderators: `${emojijs.shield} Moderadors`,
  botinfo_status: `${emojijs.wb_working} [Estat](https://wumpusgamer.ml/status/)`,
  botinfo_web: `:globe_with_meridians: [Web](https://wumpusgamer.ml)`,
  botinfo_livechat: `${emojijs.chat} [Xat en directe](https://www.tidio.com/talk/wumpusgamer)`,
  botinfo_staff_team: `${emojijs.wb_nitro} [Staff Team](https://wumpusgamer.ml/team/)`,
  botinfo_appeal: `${emojijs.blob_ban} [Recurs](https://wumpusgamer.ml/apelar/)`,
  botinfo_support: `${emojijs.blob_discord} [Servidor de Discord](https://wumpusgamer.ml)`,
  botinfo_vps: `${emojijs.server} Hosting 1 vps`,
  botinfo_librery: `${emojijs.library} Biblioteca Discord.JS 12.5.3`,
  botinfo_statsvps: `Estadístiques del vps`,
  botinfo_os: `${emojijs.gnu} Sistema operatiu Linux - Ubuntu`,
  botinfo_days: `Dies`,
  botinfo_hours: `Hores`,
  botinfo_minutes: `Minuts`,
  botinfo_seconds: `Segons`,
  botinfo_stats_wumpus: `Estadístiques de Wumpus Gamer`,
  botinfo_servers: `${emojijs.server} Servidors`,
  botinfo_users: `:busts_in_silhouette: Usuaris`,

  //bug
  bug_wahtis: `${emojijs.no} Heu de proporcionar l'error / error.`,
  bug_done: `${emojijs.no} Informe enviat, gràcies pel vostre informe.`,

  //fabithost
  fabithost_title: `Esteu buscant un allotjament de bona qualitat?`,
  fabithost_message: `Bé, això és així **Fabithost** ${emojijs.fabitnormal} (14.5K usuaris.)
  Que té suport per a diversos jocs i altres,
  Alguns d’ells ho són **Minecraft Java**, **Minecraft Bedrock**, **FiveM**, **SAMP**, & **others**.`,
  fabithost_discord: `Servidor de Discord <https://discord.gg/fabithost>`,
  fabithost_portal: `Portal https://portal.fabithost.com`,
  fabithost_panel: `Panel <https://panel.fabithost.com>`,

  //info - Don't there, only spanish command. 

  //invite
  invite_title: `Convidar Wumpus al vostre servidor`,
  invite_add: `Per afegir-me al vostre servidor`,
  invite_click: `Clica aquí`,

  //reglas
  reglas_web: `[Feu clic aquí per veure al web.](https://wumpusgamer.ml/tos/)`,

  //hubbix
  hubbix: `Uneix-te ara a el millor Hotel!\nhttps://discord.gg/TFfdY3kV4x`,

  //reportuser
  reportuser_usage: `${emojijs.no} Ús incorrecte\nCorrecte ús \`w!reportuser [Nom] [ID] [Raó] [Prova 1] {Prova 2} {Prova 3} {Prova 4}\``,
  reportuser_noprovideid: `${emojijs.no} Proporcioneu un identificador vàlid.`,
  reportuser_noreason: `${emojijs.no} Proporcioneu un motiu vàlid.`,
  reportuser_notests: `${emojijs.no} Proporcioneu proves de validesa.`,
  reportuser_done: `${emojijs.si} Informe enviat, gràcies per l'informe.`,

  //embedsay
  embedsay_containspam: `${emojijs.no} No tens permisos per posar un embed amb links.`,
  embedsay_notxt: `${emojijs.no} Has de posar el text, per posar-lo al embed.\nUso \`w!embedsay Títol + Text.\``,

  //archivement
  archivement: `Nou èxit`,
  archivement_notxt: `${emojijs.no} Proporciona un text vàlid`,
  archivement_lenght: `${emojijs.no} El text no pot ser més gran a 22.`,

  //anime
  anime_noprovide: `${emojijs.no} Heu de proporcionar el nom de l'anime per cercar-lo.`,
  anime_results: `Resultats de`,

   //tweet 
   tweet_nosaytxt: `${emojijs.no} Heu de proporcionar el text per Tweetearlo!`,

  //phcomment_nosaytxt
  phcomment_nosaytxt: `${emojijs.no} Heu de proporcionar el text per fer-ho.`,
}