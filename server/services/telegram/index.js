const logger = require('../../utils/logger');

module.exports = function TelegramService(gladys, config = { token: '766231991:AAGx6nVe7coyzEfAIa9zRp1WL3iuvrCVjPo' }) {
  // See https://github.com/yagop/node-telegram-bot-api/issues/540
  process.env.NTBA_FIX_319 = '1';
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
    bot.on('message', async (msg) => {
      logger.debug(`new message from telegram, ${msg.text}`);
      const telegramUserId = msg.from.id;
      const user = await gladys.user.getByTelegramUserId(telegramUserId);

      const message = {
        source: 'telegram',
        source_user_id: telegramUserId,
        user_id: user.id,
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
    message: {
      send: (text, options) => {
        bot.sendMessage(options.source_user_id, text);
      },
    },
  });
};
