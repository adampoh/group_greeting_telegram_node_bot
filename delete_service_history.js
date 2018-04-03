const TelegramBot = require('node-telegram-bot-api');
const token = '<YOUR BOT CODE>';
const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
    chatId = msg.chat.id;
    messageId = msg.message_id;
    var fs = require('fs');
    if ((!msg.text) && (!msg.photo) && (!msg.video) && (!msg.document)) {
        bot.deleteMessage(chatId, messageId);
    }
});