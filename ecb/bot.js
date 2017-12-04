const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready, fag');
});

client.on('message', message => {
    if (message.content === 'Hell yeah'){
        message.reply('`nice skull`');
    }
});

client.login(process.env.BOT_TOKEN);