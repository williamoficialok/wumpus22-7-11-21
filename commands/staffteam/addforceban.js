const Schema = require('../../models/forceban.js')
const Discord = require('discord.js')
//Soon :hmmm: 
module.exports = {
    nombre: "addforceban",
    alias: ["add-forceban", "addfban", "addban"],
    run: async (client, message, args) => {

        const userfid = args[0];

        const dontespcify = new Discord.MessageEmbed()
      .setDescription(`Debes espcificar la id...`)
      .setColor("RED")
        if(!userfid) return message.channel.send(dontespcify)

        Schema.findOne({ }, async(err, dbdata) => { 
            
          if(dbdata) {
            const getdate = new Date()
              dbdata.staff = message.author.id;
              dbdata.userbanned = userfid; 
              dbdata.date = getdate.toLocaleDateString
              dbdata.save();
            } 

             else { 
              new Schema({ 
                staff: message.author.id,
                userbanned: userfid
              }).save();
            } 
            
          }); 

          const yeah = new Discord.MessageEmbed()
          .setDescription(`ñ`)
          .setColor("GREEN")

          message.channel.send(yeah)

        
        } 
    }