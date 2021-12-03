module.exports = {
    name: "help",
    description: "This is what you used now",
    execute(message, args, Discord, names, desc) {
    try{
        let embed = new Discord.MessageEmbed()
        embed.setTitle('Hello, My Name is Minector')
        embed.setDescription('I am utility/fun bot. I can make memes that even dank memer can not \n I am Still in development. Below listed are some of my commands')
        for (const name of names) {
            const descr = desc[names.indexOf(name)]
            embed.addField(name, descr, true) 
        }
        message.author.send(embed);
        message.channel.send('Help yas DM\'ed :)');
    }catch{
        message.channel.send('There was an error trying to execute it');
        return;
    }
}
}