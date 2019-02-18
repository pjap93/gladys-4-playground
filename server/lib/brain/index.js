const { NlpManager, ConversationContext } = require('node-nlp');

const { getConfiguration, SUPPORTED_LANGUAGES } = require('../../config/brain/index');

module.exports = function Brain() {
  const manager = new NlpManager({ languages: SUPPORTED_LANGUAGES });

  /**
   * @description Train the brain
   * @example
   * brain.train();
   */
  async function train() {
    // first, we read the configuration folder
    const brainConfig = getConfiguration();
    // we loop through each questions
    brainConfig.questions.forEach((question) => {
      // we add questions text
      question.questions.forEach((text) => {
        manager.addDocument(question.language, text, question.label);
      });
      // we add synchronous answers
      if (question.answers) {
        question.answers.forEach((text) => {
          manager.addAnswer(question.language, question.label, text);
        });
      }
      // if there are slots in the question, we handle them
      if (question.slots) {
        question.slots.forEach((slot) => {
          const trimEntity = manager.addTrimEntity(slot.key);
          if (slot.betweenCondition) {
            trimEntity.addBetweenCondition('en', slot.betweenCondition.between[0], slot.betweenCondition.between[1], slot.betweenCondition.options);
          }
          if (slot.afterLastCondition) {
            trimEntity.addAfterLastCondition('en', slot.afterLastCondition.after, slot.afterLastCondition.options);
          }
          manager.slotManager.addSlot(question.label, slot.key, slot.mandatory, {
            [question.language]: slot.ifMissing,
          });
        });
      }
    });

    await manager.train();
  }

  /**
   * @description Classify a message
   * @param {string} message - The message to classify.
   * @param {string} language - The language of the message.
   * @param {Object} context - The context of the conversation.
   * @returns {Promise} - Resolve with the context and the result.
   * @example
   * brain.classify('What time is it?', 'en');
   */
  async function classify(message, language, context = new ConversationContext()) {
    const result = await manager.process(language, message, context);
    return {
      result,
      context,
    };
  }

  /* async function save() {
    const data = manager.export(true);
    fs.writeFileSync('model.nlp', data, 'utf8');
  } */

  return Object.freeze({
    train,
    classify,
  });
};
