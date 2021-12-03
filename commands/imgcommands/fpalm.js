module.exports = {
    name: 'fpalm',
    description: "Use this is you wanna facepalm",
    async execute(message, args, canvacord, Discord) {
        try{
        let fpers = message.mentions.users.first() || message.author
        let avatar = fpers.displayAvatarURL({format: 'png'});
        let image2 = await canvacord.Canvas.facepalm(avatar);
        let attachment = new Discord.MessageAttachment(image2, "fpalm.png");
        return message.channel.send(attachment);
        }catch(err){
            message.channel.send('there was an error please try again',err);
            return;
        }
}
}