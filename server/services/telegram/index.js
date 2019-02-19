const logger = require('../../utils/logger');

module.exports = function TelegramService(gladys, config) {
  const TelegramBot = require('node-telegram-bot-api');
  let bot;
  /**
   * @public
   * @description This function starts the TelegramService
   * @example
   * gladys.services.telegram.start();
   */
  async function start() {
    logger.log('starting telegram service');
    bot = new TelegramBot(config.token, { polling: true });
    bot.on('message', (msg) => {
      const chatId = msg.chat.id;
      const message = {
        source: 'telegram',
        source_user_id: chatId,
        date: msg.date,
        text: msg.text,
      };
      gladys.event.emit('new-message', message);
    });
  }

  /**
   * @public
   * @description This function stops the TelegramService
   * @example
   * gladys.services.telegram.stop();
   */
  async function stop() {
    logger.log('stopping telegram service');
  }

  return Object.freeze({
    start,
    stop,
  });
};
