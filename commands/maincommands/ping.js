module.exports = {
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args){
        try{message.channel.send('pong!');} catch{
            message.channel.send('There was an error trying to execute it');
            return;
        }
    }
}

