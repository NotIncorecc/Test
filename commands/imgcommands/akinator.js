const akinator = require("discord.js-akinator");
module.exports = {
    name:'akinator',
    description:'yes this is akinator',
    async execute(message, client) {
        try{
        akinator(message, client);
        }catch(err){
            message.channel.send('there was an error please try again',err)
            return
        }
    }
}    