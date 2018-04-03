const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '<YOUR BOT CODE>';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    messageId = msg.message_id;
    if ((msg.new_chat_participant) && (msg.new_chat_member) && (msg.new_chat_members)) {
        members = msg.new_chat_members;
        for (i = 0; i < members.length; i++) {
            message_content = 'Welcome, ';
            if (members[i].first_name) {
                message_content += members[i].first_name + ' ';
            }
            if (members[i].last_name) {
                message_content += members[i].last_name + ' ';
            }
            if (message_content != 'Welcome, ') {
                bot.sendMessage(chatId, message_content);
            }
        }
    }
});