module.exports = async (client, reaction, user) => {
    if(user.partial) await user.fetch();
    if(reaction.partial) await reaction.fetch();
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.message.id === '1009192826908717068'  && reaction.message.channel.id === '1009190023641448539'){

        if(reaction.emoji.id === '1007942939340701772'){

            var role = '1007942956751274024';
            await reaction.message.guild.member(user).roles.add(role);

            await user.send('Te has verificado correctamente' );
			await  reaction.users.remove(user);
           // await reaction.message.react('<:Wumpus_Verification:840601877691236393>')

        }
    }
}
//By Killer =) 
