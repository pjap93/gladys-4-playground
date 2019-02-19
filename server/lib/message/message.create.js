const logger = require('../../utils/logger');
const db = require('../../models');

/**
 * @public
 * @description handle a new message sent by a user to Gladys.
 * @param {Object} message - A message sent by a user.
 * @param {string} message.text - The text of the message.
 * @param {string} message.language - The language of the message.
 * @param {string} message.user_id - The id of the user sending the message.
 * @param {string} message.source - The name of the service where the message comes from.
 * @param {string} message.source_user_id - The user id for the source service.
 * @example
 * message.create(message);
 */
async function create(message) {
  // first, we classify the message to understand the intent
  const { classification } = await this.brain.classify(message.text, message.language);

  logger.debug(`Classified "${message.text}" with intent = "${classification.intent}".`);

  // new classification found, emitting event
  this.event.emit(classification.intent, message, classification);

  // if a first answer needs to be sent, send it
  if (classification.answer) {
    this.reply(classification.answer, message.source, message.source_user_id);
  }

  const messageToInsert = {
    text: message.text,
    sender_id: message.user_id,
    receiver_id: null,
    is_read: true,
  };

  await db.Message.create(messageToInsert);

  return {
    message,
    classification,
  };
}

module.exports = {
  create,
};
