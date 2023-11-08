const Discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {    
        nombre: "captcha",
        alias: ["imnotrobot"],

    run: async (bot, message, args) => {

        let user = await message.mentions.members.first() || message.member;
            let resapi = await fetch(encodeURI(`https://nekobot.xyz/api/imagegen?type=captcha&username=${user.user.username}&url=${user.user.displayAvatarURL({ format: "png", size: 512 })}`));

            let jsonreply = await resapi.json();

            let attachment = new Discord.MessageAttachment(jsonreply.message, "wb_captcha.png");
            
            message.channel.send(attachment);
        }
    }