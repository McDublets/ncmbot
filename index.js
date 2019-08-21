const {Client, Attachment} = require('discord.js');
const Discord = require('discord.js')
const bot = new Discord.Client();

const token = '';

const PREFIX = '!';

var version = '1.2.1';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Deo Vindice.', {
        type: "PLAYING"
    }).catch(console.error);
})

bot.on('message', msg => {
    if (msg.author == bot.user) {
        return
    }
    (msg.content); {
        var logchannel = bot.channels.get("608491964710518796");
        logchannel.send(`${msg.author.username}: ${msg.content}`)
    }
});

bot.on("messageUpdate", async (oldMessage, newMessage) => {
    if (oldMessage.content === newMessage.content) {
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
    }),

    bot.on('message', message => {

        let args = message.content.substring(PREFIX.length).split(" ");

        switch (args[0]) {
            case 'agree'
             :message.member.addRole('512099445236826112')
             message.delete();
             (message.content); {
            var agreechannel = bot.channels.get("608491964710518796");
            agreechannel.send(`${message.author.username} agreed to the rules.`)}
             console.log
             console.error
             break;
            case 'version': {
                message.channel.sendMessage('Version ' + version);
            }
            break;
        case 'rules': {
            var attachment = new Attachment('https://cdn.discordapp.com/attachments/547091017720135682/547141106421334037/CodeofConductFINAL.png')
            message.channel.sendMessage(attachment)
        }
        break;
        case 'clear': {
            if (!message.member.roles.get('516409127531184138')) return message.reply('Only Strategists and higher can use that function.')
            if (!args[1]) return message.reply('Please define a number of messages to be cleared.')
            message.channel.bulkDelete(args[1]);
            message.delete();
            return message.channel.send('Messages cleared!')
        }
        break;
        case 'kick': {
            if (!message.member.roles.get('516409127531184138')) return message.channel.send('Only Strategists and higher can use that function.')
            if (!args[1]) return message.reply('Please specify a user to be kicked.')
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.kick('IMA BOT I GOT NO REASON').then(() => {
                        message.channel.sendMessage(`BE GON ${member}`)
                    });

                } else {
                    message.reply("That user ain\'t in the server.")
                }
            } else {
                message.reply("That user ain\'t in the server.")

                break;
            }
        }
        
        case 'ban': {
            if (!message.member.roles.get('480609841115561990')) return message.reply('Only Commanding Officers and higher can use that function.')
            if (!args[1]) return message.reply('Please specify a user to be banned.')
            const user = message.mentions.users.first();
            if (user) {
                const member = message.guild.member(user);
                if (member) {
                    member.ban('IMA BOT I GOT NO REASON').then(() => {
                        message.channel.sendMessage(`BE GON FO EVA ${member}`)
                    });

                } else {
                    message.reply("That user ain\'t in the server.")
                }
            } else {
                message.reply("That user ain\'t in the server.")

                break;
            }
        }
        }
        })

bot.on('guildMemberAdd', member => {
    var joinchannel = bot.channels.get("608493082857439252");
    joinchannel.send(`Howdy ${member}, welcome to the militia!  Deo Vindice.`);
})

bot.login(token);
