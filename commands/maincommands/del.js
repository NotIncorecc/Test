module.exports = {
    name: 'del',
    description: "bruh",
    execute(message, args){
        try{
        message.delete({timeout: 1});
        args.shift();
        message.channel.send(args.join(' '))
        }catch{
            message.channel.send('There was an error trying to execute it');
            return;
        }
    }
}