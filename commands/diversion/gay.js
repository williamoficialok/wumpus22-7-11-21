const Discord = require("discord.js")
const DIG = require("discord-image-generation");
module.exports = {
  nombre: "gay",
  alias: [],
  run: async (client, message, args) => {

 let user = message.mentions.users.first() || message.author;
      
      let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
        let img = await new DIG.Gay().getImage(avatar)
        let attachmente = new Discord.MessageAttachment(img, "wb_gay.png");;
        message.channel.send(attachmente)
    }

}
