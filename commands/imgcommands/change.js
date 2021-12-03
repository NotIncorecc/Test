module.exports = {
    name: 'change',
    description: "Change My Mind",
    async execute(message, args, canvacord, Discord){
        try{
        let text = args.join(' ')
        let cimg = await canvacord.Canvas.changemymind(text);
        let attachment = new Discord.MessageAttachment(cimg, "changemymindmeme.png");
        return message.channel.send(attachment);} catch(err){
            message.channel.send('there was an error please try again',err);
            return;
        }  
    }
}