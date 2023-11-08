const Discord = require("discord.js"); 
const minigames = require('discord-minigames')

module.exports = {
    nombre: "battle",
    alias: ["batalla"],
    run: async (client, message, args) => {
        
        let member = message.mentions.members.first()    
        minigames.startBattle(member, message)
    }
}