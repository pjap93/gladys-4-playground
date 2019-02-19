const { ConversationContext } = require('node-nlp');
const Handlebars = require('handlebars');

/**
   * @description Get the reply for a given intent
   * @param {string} language - The language of the message.
   * @param {string} intent - The intent of the message.
   * @param {Object} context - The context of the conversation.
   * @returns {string} - Return a text.
   * @example
   * brain.getReply('en', 'light.turnon.success');
   */
function getReply(language, intent, context = new ConversationContext()) {
  const text = this.nlpManager.getAnswer(language, intent, context);
  return Handlebars.compile(text)(context);
}

module.exports = {
  getReply,
};
