const Discord = require("discord.js");
const db = require("megadb");
module.exports = {
  nombre: "help",
  alias: ["h"],

  run: async (client, message, args) => {
      
           ///Embed sin comandos nsfw si no esta en un canal nsfw
        const nonsfw = new Discord.MessageEmbed()

        .setTitle("Wumpus Gamer | Comandos")
  	    .setURL('https://wumpusgamer.ml/')
        .setDescription("<a:love:821711053439107102> Gracias por usar Wumpus Gamer en "+message.guild.name+"")
        .addField("⠀\n", "<:DiscordStaff:840601850147635211> **| Adminitracion** \n `aviso` `poll` `roleall` `removeroleall` `addrole` `removerole` `setnick`")
        .addField(":gear: | Configuración", "`muterole` `suggestchannel` `setprefix`")
        .addField(":tickets: | Tickets", "`En desarollo`")
        .addField(":shield: | Protección", "`backupcreate` `backupinfo` `backupload`")
        .addField("\n <a:wb_djmin:846599336502100004> | Musica", "`loop` `lyrics` `nowplaying` `pause` `play` `playlist` `queue` `remove` `resume` `search` `skip` `skipto` `stop` `volume`")
        .addField("<:9175_moderation_hammer:830292265079144490> | Moderación", "`forcebanlist` `forceban` `ban` `banid` `unban` `banlist` `kick` `lock` `unlock` `mute` `unmute` `warn` `unwarn` `warnings` `nuke` `purge` `slowmode` `voicemute` `voiceunmute` `voicemove` `voicekick` `voiceundefean` `voicedefean`")
        .addField("<a:emoji65:825129018474889227> | Diversión", "`8ball` `awesomephoto` `angry` `avatar` `bored` `eject` `hack` `kill` `kiss` `lick` `meme` `punch` `robloxav` `rps` `run` `ascii`")
        .addField(":flushed: | Quote", "`quote` `clyde`")
        .addField(":pushpin: | Utiles", "`allbots` `covid` `github` `embed` `emoji` `finduser` `google` `poll` `qr` `randomuser` `say` `sendmd` `servericon` `serverinfo` `ss` `suggest`")
        .addField("<:wb_love:843692432575299625> | Wumpus Gamer", "`botinfo` `bug` `help` `invite` `ping` `reglas` `support` `updates` `web` `vip` `team`")
        .addField("<:gamercoin:803059677365534720> | Vips", "`vipcommands` `soyvip`")
        .addField("<a:mc:840601858821324831> | Minecraft", "`skin` `head` `minecraftserver`")
        .addField("<a:wb_coin:845725456815620158> | Economia", "`bal` `daily` `work` `deposit`")
        .addField(":underage: | Nsfw", "`Debes estar en un canal nsfw para ver los comandos`")
        .addField("<a:sorteo:843288058128367656>  | Sorteos", "`start` `stop` `reroll` \n")
        //.addField("\n⠀", "Mi prefix en este servidor es w!")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`To look the new help, use w!help, this is old.`)
        if (!message.channel.nsfw) {
            return message.channel.send(nonsfw)
        }
      
      
  const help = new Discord.MessageEmbed()

        .setTitle("Wumpus Gamer | Comandos")
  	    .setURL('https://wumpusgamer.ml/')
        .setDescription("<a:love:821711053439107102> Gracias por usar Wumpus Gamer en "+message.guild.name+"")
        .addField("⠀\n", "<:DiscordStaff:840601850147635211> **| Adminitracion** \n `aviso` `poll` `roleall` `removeroleall` `addrole` `removerole` `setnick`")
        .addField(":gear: | Configuración", "`muterole` `suggestchannel` `setprefix`")
        .addField(":tickets: | Tickets", "`En desarollo`")
        .addField(":shield: | Protección", "`backupcreate` `backupinfo` `backupload`")
        .addField("\n <a:wb_music:840601867246633000> | Musica", "`loop` `lyrics` `nowplaying` `pause` `play` `playlist` `queue` `remove` `resume` `search` `skip` `skipto` `stop` `volume`")
        .addField("<:9175_moderation_hammer:830292265079144490> | Moderación", "`forcebanlist` `forceban` `ban` `banid` `unban` `banlist` `kick` `lock` `unlock` `mute` `unmute` `warn` `unwarn` `warnings` `nuke` `purge` `slowmode` `voicemute` `voiceunmute` `voicemove` `voicekick` `voiceundefean` `voicedefean`")
        .addField("<a:emoji65:825129018474889227> | Diversión", "`8ball` `awesomephoto` `angry` `avatar` `bored` `eject` `hack` `kill` `kiss` `lick` `meme` `punch` `robloxav` `rps` `run` `ascii`")
        .addField(":flushed: | Quote", "`quote` `clyde`")
        .addField(":pushpin: | Utiles", "`allbots` `covid` `github` `embed` `emoji` `finduser` `google` `poll` `qr` `randomuser` `say` `sendmd` `servericon` `serverinfo` `ss` `suggest`")
        .addField("<:wb_love:843692432575299625> | Wumpus Gamer", "`botinfo` `bug` `help` `invite` `ping` `reglas` `support` `updates` `web` `vip` `team`")
        .addField("<:gamercoin:803059677365534720> | Vips", "`vipcommands` `soyvip`")
        .addField("<a:mc:840601858821324831> | Minecraft", "`skin` `head` `minecraftserver`")
        .addField("<a:wb_coin:845725456815620158> | Economia", "`bal` `daily` `work` `deposit`")
        .addField(":underage: | Nsfw", "`anal` `neko` `rule34` `4k` `random`")
        .addField("<a:sorteo:843288058128367656>  | Sorteos", "`start` `stop` `reroll` \n")
        .addField("\n⠀", "Mi prefix en este servidor es w!")
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(`Desarollado por Wumpus Team.`)

    message.channel.send(help);
}
  }