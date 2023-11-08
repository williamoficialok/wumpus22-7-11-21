const Discord = require("discord.js");
const bot = new Discord.Client();
const snekfetch = require('snekfetch')
const messagejson = require("../../messages.json");
const emojijson = require("../../emojis.json");

module.exports = {
  nombre: "robloxav",
  alias: ["robloxavtar", "roblox-avatar", "avatar-roblox"],

  run: async (client, message, args) => {

   let saybot = args.join('_');
        const url = `https://api.roblox.com/users/get-by-username?username=${saybot}`;
        snekfetch.get(url).then(result => {
              const data = result.body.Id;

              const no = new Discord.MessageEmbed()
              .setDescription(`${client.lang.robxav_noprovidename}`)
              .setColor("RED")
              if (!saybot) return message.channel.send(no)
              
              const nofound = new Discord.MessageEmbed()
              .setDescription(`${client.lang.robxab_notfound}`)
              .setColor("RED")

              if (result.body.Id === "undefined") return message.channel.send(nofound);

              const url2 = `https://api.roblox.com/ownership/hasasset?userId=${data}&assetId=102611803`;
              snekfetch.get(url2).then(a => {
                const Verifiedcheck = a.body
                  const embed = new Discord.MessageEmbed()
                  .setColor("RANDOM")
                  .setTitle(saybot + " Avatar")
                  .setImage("http://www.roblox.com/Thumbs/Avatar.ashx?x=100&y=100&Format=Png&username=" + saybot);
                  message.channel.send(embed)
                })
            }) 
    }
  }