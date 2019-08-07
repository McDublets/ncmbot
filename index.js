const Discord = require('discord.js');
const bot = new Discord.Client();

const token = process.env.token;

const PREFIX = '!';

var version = '1.0.1';

bot.on('message', msg=>{
    if (msg.author == bot.user) {
        return
    } 
    (msg.content);{
         const generalChannel = msg.guild.channels.find(channel => channel.name === "all-messages-sent")
    generalChannel.send(`${msg.author.username}: ${msg.content}`)
   
    }
});

bot.on('ready', () =>{
    console.log('This bot is online!');
    bot.user.setActivity('Deo Vindice.', { type: "PLAYING"}).catch(console.error);
})

bot.on("messageUpdate", async(oldMessage, newMessage) => {
    if(oldMessage.content === newMessage.content){
        return;
    }
    var logchannel = bot.channels.get("608491918585888788");
    let logembed = new Discord.RichEmbed()
    .setAuthor(oldMessage.author.tag, oldMessage.author.avatarURL)
    .setThumbnail(oldMessage.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Edited")
    .addField("Before", oldMessage.content, true)
    .addField("After", newMessage.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})

bot.on("messageDelete", async message => {
    var logchannel = bot.channels.get("608491938794176542"); 
    let logembed = new Discord.RichEmbed()
    .setAuthor(message.author.tag, message.author.avatarURL)
    .setThumbnail(message.author.avatarURL)
    .setColor("RED")
    .setDescription("Message Deleted")
    .addField("Message", message.content, true)
    .setTimestamp()
    logchannel.sendMessage(logembed)
})
,

bot.on('message', message=>{
  
    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'info':{
                 message.channel.sendMessage('Version ' + version);
             }
             break;
        case 'clear':
            if(!args[1]) return message.reply('Please define a number of messages to be cleared.')
            if(!message.member.roles.find(r => r.name === "Strategist")) return message.channel.send('YOU AINT AN ADMIN YOU IDIOT!!')
            message.channel.bulkDelete(args[1]);
            return message.reply('Messages cleared!')
            break;
        case 'agree'
            :message.member.addRole('512099445236826112')
            console.log
            console.error
            break;
        case 'rules':
            message.channel.sendMessage('https://cdn.discordapp.com/attachments/547091017720135682/547141106421334037/CodeofConductFINAL.png')
            break;
                
    }
})

bot.on('guildMemberAdd', member =>{ 
    const channel = member.guild.channels.find(channel => channel.name === "joins");
    if(!channel) return;

    channel.send(`Howdy ${member}, welcome to the server!  Deo Vindice`);
})

bot.login(token);
