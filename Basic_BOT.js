const TelegramBot = require('node-telegram-bot-api');

const token = '7674137033:AAGZLba7_VG4neWQEXfl17jXTJgVdAsrApU';

const bot =new TelegramBot(token, {polling: true});

bot.on('message', function(msg)
{
    
    console.log(msg);
    if(msg.text="Hlo")
    {
        bot.sendMessage(msg.chat.id,"Hello Babai");
    }
    if(msg.text="Oye")
    {
        bot.sendMessage(msg.chat.id,"Hello Bava");

    }
})
