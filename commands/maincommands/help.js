module.exports = {
    name: "help",
    description: "this is about the bot",
    execute(message, args, Discord, names, desc) {
        let embed = new Discord.MessageEmbed()
        embed.setTitle('Hello, My Name is Minector')
        embed.setDescription('I am utility/fun bot. I can make memes that even dank memer can not \n I am Still in development. Below listed are some of my commands')
        for (const name of names) {
            const descr = desc[names.indexOf(name)]
            embed.addField(name, descr, true) 
        }
        message.author.send(embed);
        message.channel.send('Help yas DM\'ed :)');
    }
}