module.exports = {
    name:'hitler',
    description:'Worse than Hitler',
    async execute(message, args, canvacord, Discord) {
        try{
        let hpers = message.mentions.users.first() || message.author;
        if (hpers.id === "792046280619851786") {message.channel.send("Sorry I can't let you troll them")}
        else {
        if (!hpers) {message.channel.send("mention someone")}
        else {
        let avatar = hpers.displayAvatarURL({format: 'png'});
        let image3 = await canvacord.Canvas.hitler(avatar);
        let attachment = new Discord.MessageAttachment(image3, "hitler.png");
        return message.channel.send(attachment);
        }}}catch(err){
            message.channel.send('there was an error please try again',err);
            return;
        }
    }               
}