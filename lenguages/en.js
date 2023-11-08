const emojijs = require("../emojis.json");
let answers = ["In my opinion, yes", "It is true", "Probably", "Everything points to yes", "Without a doubt", "Yes", "Definitely", "You should trust it", " Vague answer, try again "," Ask another time "," It would be better if I did not tell you now "," I can not predict it now "," Concentrate and ask again "," Could be "," Do not count on it "," My answer is no "," My sources say no "," The prospects are not good "," Very doubtful "," Of course I am! ","ARA ARA :flushed:"]

module.exports = {
   ucantusewumpus: `${emojijs.no} You can't use Wumpus, you are in the Blacklist`,
   unkowcmd: `${emojijs.no} Unknown command.`,
   thanksxvip: `${emojijs.si} Thanks for to be an Wumpus Gold User.`,
   usernopermissions: `${emojijs.no} You don't have permissions to execute this command.`,
   notsaynewprefix: `${emojijs.no} Say me an new Prefix.`,
   botnopermissions: `${emojijs.no} I don't have permissions.`,
   jerarquiaroleup: `${emojijs.no} My role must be above of.`,
   jearquiayourroleup: `${emojijs.no} Your role must be above of-`,
   membernovoicechannel: `${emojijs.no} You must be on a voice channel.`,
   nonsfwchannel: `${emojijs.no} You must be on channel nsfw :flushed:`,
   onlystaffteam: `${emojijs.no} You must be from the staff of  Wumpus Gamer to be able to do this.`,
   songsend: `${emojijs.no} The songs are over, i go out.`,
   nosongsplaying: `${emojijs.no} Not there nothing playing in this server.`,
   error: `${emojijs.no} An error occurred, it has already been reported, will be fixed it fastest possible.`,
   needvip: `${emojijs.no} This is an command of Wumpus Gold, mode info in https://wumpusgamer.ml/gold/`,
   onlynumbers: `${emojijs.no} Only numbers are allowed.`,
   noqueue: `${emojijs.no} There are no songs in the queue.`,
   nosongtoskip: `${emojijs.no} There are no songs that i can skip.`,
   playlistnotfound: `${emojijs.no} PLayList not found.`,
   playlistadded: `${emojijs.no} The PlayList has been added.`,
   songaddedtoqueue: `${emojijs.no} The song has been added to the queue.`,
   nomention: `${emojijs.no} You must mention to an valid user`,
   jerahehavemoreperms: `${emojijs.no} The/she has more or less permissions than you.`,
   jerahehavemorebotperms: `${emojijs.no} The/she has more or the same permission as me.`,
   notsaytime: `${emojijs.no} You must specify an time.`,
   notespecify: `${emojijs.no} Not specify.`,
   nomentionrole: `${emojijs.no} You must mention an role.`,
   nomentionchannel: `${emojijs.no} You must mention an valid channel!`,
   language: `Language`,
   clickinthelink: `Click in the link to join.`,

   moderation_better: `The commands of Moderation are getting better`,
   eco_desativated: `Economy commands will be disabled for improvement it...`,
   
   //addrole
   addr_therole: `${emojijs.si} The role`,
   addr_to: `has been added correctly to`,

   //announcement
   annc_notsayann: `${emojijs.no} You must say the new announcement.`,
   annc_you_re_sure: `You are sure of send the announcement to`,
   annc_announcment: `Announcement`,
   annc_sendto: `${emojijs.si} Announcement send to `,
   annc_cancel: `${emojijs.no} Announcement cancelled.`,

  //Setname 
  setn_needname: `${emojijs.no} You must especify your name\nCorrect use \`w!setname [Name]\``,
  setn_yournameis: `${emojijs.si} Now, your name is`,
  setn_name: `Name`,
  setn_notconfigured: `${emojijs.si} You don't have an profile configured, you can do it with\`w!setname [Name]\``,

  //Poll
  poll_nopollsay: `${emojijs.no} Incorrect use, use \`w!poll [Title] + Option 1 + Option 2\``,

  //removerole
  remrol_donthave: `${emojijs.no} The user does not have that role.`,
  remrol_therol: `${emojijs.si} The rol`,
  remrol_removed: `has removed of`,

  
  //Settings 
  setts_configof: `Configurations of`,

  //backupcreate
  bcp_creating: `${emojijs.loadingcyan} Creating the backup...`,
  bcp_created: `${emojijs.si} The backup was created correctly.`,
  bcp_lookmd: `Looks your mds.`,
  bcp_guild: `Guild`,
  bcp_toload: `To load the backup use`,

  //backupinfo
  bcpi_noprovideid: `${emojijs.no} Provide a valid id.`,
  bcpi_information: `Backup ID`,
  bcpi_server: `Guild`,
  bcpi_notfound: `${emojijs.no} Backup not found.`,
  bcpi_size: `Size`,
  bcpi_createdat: `Created at`,

  //backupload
  bcpl_noprovideid: `${emojijs.no} Provide a valid id.`,
  bcpl_warning: `When the backup is loaded, **all channels, roles, etc. Will be replaced.**\nReact with ✅ to confirm.`,
  bcpl_timeend: `${emojijs.no} Time is up, i have canceled the backup load.`,
  bcpl_loading: `${emojijs.si} The backup are loading..`,

  //Setprefix
  sp_notsaynew: `${emojijs.no} ¿What will be the new prefix?`,
  sp_nowis: `${emojijs.si} Now the prefix is`,
  
  //8ball
  ochoball_replys: `${answers[(Math.floor(Math.random() * answers.length))]}`,
  ochoball_uquestion: `You asked`,
  ochoball_noquestion: `What you want ask?`,
  ochoball_myreply: `My reply`,

  //Change my mind
  cmym_noprivdetxt: `${emojijs.no} You must provide an text`,
  cmym_loading: `${emojijs.loadingcyan} Loading...`,

  //Clyde
  clyde_noprovidetxt: `${emojijs.no} You must provide an text.`,

  //color 
  color_notsay: `${emojijs.no} You must put an color in Hexadecimal, for example \`w!color #ff8615\``,

  //eject 
  eject_expulsedto: `Has kicked to`,
  eject_ifnotseen: `The image not seen? Click here.`,

  //lisa
  lisa_noprovidetxt: `${emojijs.no} You must provide an text.`,

  //Rps 
  rps_incorrectuse: `Use thus\n \`w!rps stone/paper/scissor\``,
  rps_invalidoption: `Invalid option.`,

  //wanted
  wanted_talvez: `${emojijs.no} Maybe you wanted to say\n \`w!wanted 1\``,

  //Angry
  angry_are: `Is angry >:(`,

  //Bored
  bored_are: `Is bored`,

  //Kill
  kill_haskilled: `Has killed to`,

  //kiss
  kiss_gavehima: `Gave him an kiss to`,

  //lick
  lick_haslickedto: `Has licked to`, 

  //punch
  punch_gaspunchedto: `Has punched to`,

  //run
  run_running: `Is running!`,

  //head
  head_usrnopremium: `${emojijs.no} The user not is premium.`,
  head_notvalidusr: `${emojijs.no} The user not is valid`,

  //minecraftserver
  mcsv_noprovideid: `${emojijs.no} Provide a valid ip. (In Bedrock especify port)`,
  mcsv_notfound: `${emojijs.no} I can't find that server.`,
  mcsv_port: `Port`,
  mcsv_status: `Status`,
  mcsv_version: `Version`,
  mcsv_ping: `Current ping`,
  mcsv_currentplayes: `Current players`,
  mcsv_maxplayers: `Maximum of players`,
  mcsv_pingnotdetermine: `None`,
  mcsv_description: `Description`,

  //robloxav
  robxav_noprovidename: `${emojijs.no} Provide an valid name.`,
  robxab_notfound: `${emojijs.no} User not found.`,

  //skin
  skin_notsayname: `${emojijs.no} You must say the name.`,
  skin_of: `Skin of`,

  //Loop 
  loop_is: `${emojijs.disco} The loop is found`,
  loop_on: `on.`,
  loop_off: `off`,

  //lyrics 
  lyrics_notfound: `${emojijs.no} Not lyrics founds.`,
  lyrics_ly: `Lyrics -`,
  lyrics_page: `Page`,
  lyrics_page_of: `of`,

  //Nowplaying
  np_title: `${emojijs.flecha_derecha_animada} Title`,
  np_duration: `${emojijs.flecha_derecha_animada} Duration`,
  np_reqby: `${emojijs.flecha_derecha_animada} Requested by`,
  np_vc: `${emojijs.flecha_derecha_animada} Voice channel`,

  //pause
  pause_paused: `${emojijs.disco} The music has been stopped.`,

  //play
  play_whatsong: `${emojijs.no} You must put a song (Name or link).`,
  play_notfoundyt: `${emojijs.no} I can't find the song in YouTube.`,
  play_notfoundcs: `${emojijs.no} I can't find the song in Sound Cloud.`,
  play_addedtoqueue: `${emojijs.si} Song added to the Play List.`,
  play_np: `Now playing`,

  //Playlist
  playlist_notprovidelink: `${emojijs.no} You must provide an link of the PlayList.`,
  playlist_added: `${emojijs.si} PlayList added.`,
  playlist_notfound: `${emojijs.no} PlayList not found.`,
  playlist_addedtitle: `${emojijs.si} PLayList added to the queue.`,
  playlist_name: `Name`,
  playlist_duration: `Duration`,
  playlist_reqby: `Requested by`,
  playlist_nowplayingq: `Now playing`,

  //queue
  queue_title: `Queue`,
  queue_np: `Now playing`,
  queue_vc: `Voice channel`,
  queue_page: `Page 1 of`, 

  //remove
  remove_incorrectuse: `${emojijs.no} Incorrect use\nw!remove [Song Number]`,
  remove_ucant: `${emojijs.no} You can't do that...`,
  remove_was: `${emojijs.no} Was removed from the queue.`,

  //resume
  resume_resmued: `${emojijs.disco} Song resumed!`,

  //search
  search_noprovidesrc: `${emojijs.no} You must provide an name of the song.`,
  search_notfound: `${emojijs.no} I can't find the song.`,
  search_results: `Resuslts of`,
  search_typeto: `Write the number of the selected song to add it to the queue`,
  search_ratelimit: `You have not selected anything in 30 seconds, search canceled.`,
  search_added: `The song has added to the queue.`,
  search_name: `Name`,
  search_duration: `Duration`,
  search_reqby: `Requested by`,
  search_nowplaying: `Now playing`,

  //skip
  skip_resumed: `${emojijs.disco} Music resumed`,

  //skipto
  skipto_incorrectuse: `${emojijs.no} You must put an number.`,
  skipto_ucant: `${emojijs.no} You can't skip 0 songs...`,
  skipto_skipped: `${emojijs.disco} I have skipped to the song`,

  //volume
  volume_is: `${emojijs.disco} The volume is`,
  volume_novalid: `${emojijs.no} You can only put the volume between 0/150.`,
  volume_now: `${emojijs.disco} The volume now is`,

  //edit 
  edit_provideid: `${emojijs.no} Provide a valid message ID.`,
  edit_noprovidewinners: `${emojijs.no} Provide valids winners.`,
  edit_nogw: `${emojijs.no} Provide an valid giveaway.`,
  edit_ok: `${emojijs.si} The giveaway will be edited in 5 seconds.`,

  //end 
  end_noptivideid: `${emojijs.no} You must provide a valid message id.`,
  end_notfound: `${emojijs.no} Giveaway not found.`,
  end_ok: `The giveaway It's going to edit in`,
  end_seconds: `seconds.`,
  end_alreadyend: `The giveaway`,
  end_over: `already it's over`,
  end_ok: `The giveaway`,
  end_finished: `it is finished`,

  //reroll
  reroll_noprovideid: `${emojijs.no} You must provide a valid id.`,
  reroll_notfound: `${emojijs.no} I can't find that giveaway.`,
  reroll_done: `${emojijs.si} Giveaway rerolled.`,
  reroll_idk: `The giveaway with the id`,
  reroll_idktwo: `It has not ending`,

  //start
  start_chnotfound: `${emojijs.no} Channel not found.`,
  start_usage: `Usage`,
  start_channel: `Channel`,
  start_time: `Time`,
  start_winners: `Winners`,
  start_giveaway: `Giveaway`,
  start_notime: `${emojijs.no} Time not valid.`,
  start_nowinners: `${emojijs.no} Winners not valid.`,
  start_nogiveaway: `${emojijs.no} Giveaway not valid.`,
  start_lack: `Lack`,
  start_react: `React with 🎉 to participe!`,
  start_congrulations: `Congrulations,`,
  start_win: `Won`,
  start_nobody: `No one participated in the draw`,
  start_hostedby: `Hosted by`,
  start_finished: `It was finished ago`,
  start_seconds: `Seconds`,
  start_minutes: `Minutes`,
  start_days: `Days`,
  start_started: `${emojijs.si} Perfect, i started`,
  start_in: `in`,
  
  //addemoji 
  addemoji_nourl: `${emojijs.no} Provide a valid url.`,
  addemoji_noname: `${emojijs.no} You must put an name.`,
  addemoji_lenght: `${emojijs.no} The amount maximium is of 15 characters.`,
  addemoji_done: `${emojijs.si} Emoji added correctly.`,

  //allbots
  allbots_total: `Total of Bots`,

  //ascii
  ascii_lenght: `${emojijs.no} The amount maximium is of 80 caracters.`,
  ascii_notxt: `${emojijs.no} You must provide an text.`,

  //avatar
  avatar_from: `Avatar from`,


  //banner
  banner_donthave: `${emojijs.no} The user don't have banner.`,
  banner_from: `Banner from`,

  //covid
  covid_preventions: `:small_blue_diamond: Wash hands frequently\n:small_blue_diamond: Usage Antibacterial Gel\n:small_blue_diamond: Usage Alcohol\n:small_blue_diamond: To cough or sneeze use a tissue\n:small_blue_diamond: Avoid direct contact with people with symptoms of Cough and Flu\n:small_blue_diamond: Stay Home`,
  covid_noprovidename: `${emojijs.no} Wrte the name of the country to search for information on Covid-19.`,
  covid_cases: `Cases from the country`,
  covid_cases_totals: `Total cases`,
  covid_cases_critices: `Critical cases`,
  covid_today: `Today cases`,
  covid_totals_deats: `Today deaths`,
  covid_recupereds: `Recupereds`,
  covid_preventionss: `Preventions`,
  covid_deaths_today: `Today deaths`,
  covid_notfound: `${emojijs.no} Country not valid, only English.`,
  
  //embed (secret command)
  embed_if: `If this message appear is because have anything very important, what say... ||SHE DOESN'T LOVE YOU, NOR WILL SHE LOVE YOU.||`,
  embed_footer: `Except if  you invites the bot to your server 👌`,

  //emoji
  emoji_noname: `${emojijs.no} You must provide an emoji.`,
  emoji_onlyserver: `${emojijs.no} Only emojis from the server.`,
  emoji_cantindentify: `${emojijs.no} Emoji not found.`,
  emoji_information: `Information of the emoji`,
  emoji_identifier: `Identifier`, 

  //finduser
  finduser_noprovidename: `${emojijs.no} You must provide an name.`,
  finduser_notfound: `${emojijs.no} I sorry, i did not find any user with that name.`,


  //github
  github_noprovideuser: `${emojijs.no} Provide an valid user.`,
  github_notfound: `${emojijs.no} I sorry, user not found.`,
  github_from: `Github from`,
  github_user: `User`,
  github_id: `ID`,
  github_biography: `Biography`,
  github_ubication: `Ubication`,
  github_createdAt: `Account Created at`,
  github_repositories: `Repositories`,
  github_followers: `Followers`,
  github_follwing: `Following`,

  //Invites
  invites_donthave: `${emojijs.no} Don't have invites.`,
  invites_from: `Invite's from`,
  invites_persons_inviteds: `Persons inviteds`,
  invites_have: `You currectly have`,
  invites_havetwo: `regular, **0** left, **0** fake.`,

  //ping
  ping_is: `Ping messages`,

  //qr
  qr_noprovidetext: `${emojijs.no} You must provide an text.`,

  //roleinfo
  roleinfo_nomention: `${emojijs.no} You must mention an valid role.`,
  roleinfo_information: `Information from the role`,
  roleinfo_id: `ID`,
  roleinfo_name: `Name`,
  roleinfo_hex_color: `Hexadecimal code`,
  roleinfo_in_members: `Members who own it`,
  roleinfo_position: `Position`,
  roleinfo_mentionable: `Mentionable`,

  //say
  say_notext: `${emojijs.no} You must provide an text.`,
  say_contain_spam: `${emojijs.no} The message contain message`,

  //servericon
  servericon_from: `Server icon from`,

  //serverinfo

  //setsugget
  setsuggest_done: `${emojijs.no} Suggestions will be sent to`,

  //snipe
  snipe_nomessage: `${emojijs.no} No message has been deleted recently`,

  //suggest
  suggest_noconfigured: `${emojijs.no} There is no channel set, use \`w!setsuggest\` to configure it.`,
  suggest_noprovide: `${emojijs.no} You must provide the suggest.`,
  suggest_send: `${emojijs.si} Suggestion sent successfully.`,
  suggest_new: `New suggest`,

  //Userinfo
  userinfo_information: `Information from`,
  userinfo_user: `User`,
  userinfo_tag: `Tag`,
  userinfo_id: `ID`,
  userinfo_nick: `Nick`,
  userinfo_joinAt: `Joined at`,
  userinfo_createdAt: `Account created in`,

  //botinfo
  botinfo_information: `Information from Wumpus Gamer`,
  botinfo_developers: `${emojijs.dev} Developers`,
  botinfo_administrators: `${emojijs.robloxian} Administrators`,
  botinfo_moderators: `${emojijs.shield} Moderators`,
  botinfo_status: `${emojijs.wb_working} [Status](https://wumpusgamer.ml/status/)`,
  botinfo_web: `:globe_with_meridians: [Web](https://wumpusgamer.ml)`,
  botinfo_livechat: `${emojijs.chat} [Live chat](https://www.tidio.com/talk/wumpusgamer)`,
  botinfo_staff_team: `${emojijs.wb_nitro} [Staff Team](https://wumpusgamer.ml/team/)`,
  botinfo_appeal: `${emojijs.blob_ban} [Appeal](https://wumpusgamer.ml/apelar/)`,
  botinfo_support: `${emojijs.blob_discord} [Servidor of Discord](https://wumpusgamer.ml)`,
  botinfo_vps: `${emojijs.server} Hosting a vps`,
  botinfo_librery: `${emojijs.library} Librery Discord.JS 12.5.3`,
  botinfo_statsvps: `Stats of the vps`,
  botinfo_os: `${emojijs.gnu} Operative system Linux - Ubuntu`,
  botinfo_days: `Days`,
  botinfo_hours: `Hours`,
  botinfo_minutes: `minutes`,
  botinfo_seconds: `seconds`,
  botinfo_stats_wumpus: `Stats of Wumpus`,
  botinfo_servers: `${emojijs.server} Servers`,
  botinfo_users: `:busts_in_silhouette: Users`,

  //bug
  bug_wahtis: `${emojijs.no} You must provide the bug/fault.`,
  bug_done: `${emojijs.no} Report sent, thanks for your report.`,

  //fabithost
  fabithost_title: `Are you looking for a good quality Hosting?`,
  fabithost_message: `Well, this is **Fabithost** ${emojijs.fabitnormal} (14.5K users.)
  Which has support for various Games & others,
  Some of them are **Minecraft Java**, **Minecraft Bedrock**, **FiveM**, **SAMP**, & **others**.`,
  fabithost_discord: `Servidor of Discord <https://discord.gg/fabithost>`,
  fabithost_portal: `Portal https://portal.fabithost.com`,
  fabithost_panel: `Panel <https://panel.fabithost.com>`,

  //info - Don't there, only spanish command. 

  //invite
  invite_title: `Invite Wumpus to you servidor`,
  invite_add: `To add me to you server`,
  invite_click: `Click here`,

  //reglas
  reglas_web: `[Click here to view in the web.](https://wumpusgamer.ml/tos/)`,

  //hubbix
  hubbix: `Join now to the better hotel!\nhttps://discord.gg/TFfdY3kV4x`,

  //reportuser
  reportuser_usage: `${emojijs.no} Incorrect use\nCorrecte use \`w!reportuser [Name] [ID] [Reason] [Test 1] {Test 2} {Test 3} {Test 4}\``,
  reportuser_noprovideid: `${emojijs.no} Provide a valid ID.`,
  reportuser_noreason: `${emojijs.no} Provide a valid reason.`,
  reportuser_notests: `${emojijs.no} Provide valids tests.`,
  reportuser_done: `${emojijs.si} Report sent, thanks for the report.`,

  //embedsay
  embedsay_containspam: `${emojijs.no} You do not have permissions to put an embed with links.`,
  embedsay_notxt: `${emojijs.no} You must put the text, to put it in the embed.\nUsage \`w!embedsay Titile + Text.\``,

  //archivement
  archivement: `New archivement`,
  archivement_notxt: `${emojijs.no} You must provide the text.`,
  archivement_lenght: `${emojijs.no} The text cannot be greater than 22.`,

  //anime
  anime_noprovide: `${emojijs.no} You must provide the name of the anime, to search it.`,
  anime_results: `Results of`,

  //tweet 
  tweet_nosaytxt: `${emojijs.no} You must provide the text to Tweet It!`,

  //phcomment_nosaytxt
  phcomment_nosaytxt: `${emojijs.no} You must provide the text to do it.`,
}