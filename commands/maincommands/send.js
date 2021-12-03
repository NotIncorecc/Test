module.exports = {
    name:'send',
    description:'Sends a message to the mentioned person',
    execute(message, args) {
        try{
        const mem_send = message.mentions.users.first();
        if (!mem_send) {
            message.delete({timeout: 1});
            message.channel.send('mention someone to send');
        } else {
        let arrc = args;
        message.delete({timeout: 1}).catch(err => {
            console.error(err);
            message.channel.send('I can\'t delete this message for you. Del it fast or someone will see it')
        });
        arrc.shift();
        const stuff = arrc.join(' ');
        mem_send.send(stuff);
        message.channel.send('Done');
        }
    }catch{
        message.channel.send('There was an error trying to execute it');
        return;
    }
}
}