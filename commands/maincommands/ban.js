module.exports = {
    name: 'ban',
    description: "this is a ban command!",
    execute(message, args){
        try{
        if (message.member.permissions.has('BAN_MEMBERS')) {
            const target = message.mentions.users.first();
            if (target.id === "792046280619851786") {return message.channel.send("Sorry, my spells don't work on them.")}
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been banned");
            } else {message.channel.send(`You coudn't ban that member!`);}
          } else {message.reply('You don\'t have the permissions');}
        }catch{
            message.channel.send('There was an error trying to execute it');
            return;
        }
    }
}