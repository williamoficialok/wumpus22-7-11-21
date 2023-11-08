const Discord = require('discord.js');

module.exports = {
  nombre: "reglas",
  alias: ["rg", "rules", "tos"],
  description: "Reglas de Wumpus Gamer!",
  category: "Información.",
  cooldown: "",
  usage: "\`<prefix>reglas\`",
  nsfw: "",
  permissions: "",
  gold: "",

  run: async (client, message, args) => {
    
  const embedregla = new Discord.MessageEmbed()
  /*.setDescription('**__REGLAS DE WUMPUS GAMER <a:wb_si:840601875215679539>__**\n')
  .addField("\n <a:Flecha_rgb_derecha:802746839279075338> No abusar del bot <:wb_xD:843688678060064789>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> Respetar los terminos & condiciones de wumpus <a:wb_tos:845173913612451841>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No ser de squads/raiders ya que hiras directo a la blacklist & forceban <:wb_nimodoxd:843688556840747018>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No faltar el respeto tanto como al staff como a los miembros <a:wb_emoji_favorito_de_dats:843688522828218378>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No hacer spam <a:wb_nospam:845174897994891285>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No hacer flood :infinity:", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No tener una actitud toxica :microbe:", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No aprovecharse de bugs :bug:", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> Si el bot se apaga por favor no apurar a los desarolladores <:wb_tasbien:845175718917046292>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No pedir rango <:wb_denuevonnms:845176130763751465>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No hablar sobre temas polemicos <a:wb_nono:840601825006714911>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No pedir añadir sus bots, Ya qué por seguridad no podemos añadir sus bots :robot:", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> No pedir qué le hagamos bots, Si hacemos bots nosotros avisaremos <a:emoji66:825129064180351006>", "⠀")
    .addField("<a:Flecha_rgb_derecha:802746839279075338> No pedir vip <:gamercoin:803059677365534720>", "⠀")
  .addField("<a:Flecha_rgb_derecha:802746839279075338> Si fuiste añadido al forceban/blacklist & quieres apelar puedes hacerlo mediante la pagina web <a:wb_give_ban:845176981141585950>", "⠀")
  .addField("**Los terminos & condiciones aplican para todos de igual manera <a:verification_2:825111431875002389>**", "Atte: Wumpus Gamer Team!")
  .setColor('RANDOM')*/
  .setDescription(`${client.lang.reglas_web}`)
  .setColor("RANDOM")
  message.channel.send(embedregla)
  }
}