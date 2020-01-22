const {Client, Attachment} = require('discord.js');
const bot = new Client();

const token = process.env.token;

const PREFIX = '%';

bot.on('ready', () =>{
    console.log('This bot is online!');
})

bot.on('message', message => {

    let args = message.content.substring(PREFIX.length).split(" ");

    switch(args[0]){
        case 'ping':
            message.channel.sendMessage('pong!')
            break;
        case 'toua':
            message.channel.sendMessage('MiNaL<:peepoumaru:652202748934356992>')
            break;
        case 'clear':
        if(!message.member.roles.find(r => r.name === "Hunter Guild Officials")) return message.channel.send('YOU DO NOT HAVE PERMISSIONS')
        if(!args[1]) return message.reply('Error')
        message.channel.bulkDelete(args[1]);
        break;
        case 'ains':
            const attachment = new Attachment('./ains.jpg')
            message.channel.send(message.author, attachment);
        break;
        case 'spicy':
            const attachment2 = new Attachment('./tenor.gif')
            message.channel.send(message.author, attachment2);
        break;
        case 'MiNaL':
            message.channel.sendMessage('<:peepoumaru:652202748934356992>')
        break;
        case 'hiro':
            message.channel.sendMessage('Tsk!')
        break;
        }
    
})

bot.login(token);