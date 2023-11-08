const Schema = require('../../models/work.js')
const Discord = require('discord.js')

module.exports = {
    nombre: "setname",
    alias: [],
    run: async (client, message, args) => {

        Schema.findOne({ User: message.author.id }, async(err, dbdata) => {
            
            const works = [
                "1",
                "2",
                "3"
            ]

            const randomsWorks = works[Math.floor(Math.random() * works.lenght)];
            console.log(randomsWorks)
          if (dbdata) {
              dbdata.User = message.author.id,
              dbdata.Nombre = "A";
              dbdata.save();
            } 

             else {
              new Schema({
                User: message.author.id,
              }).save();
            }
            
          });

          const yeah = new Discord.MessageEmbed()
          .setDescription(`a`)
          .setColor("GREEN")

          message.channel.send(yeah)
        
        }
    }