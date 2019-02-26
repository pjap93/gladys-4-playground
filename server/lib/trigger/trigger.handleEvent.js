const { verifiers } = require('./trigger.verifiers');
const logger = require('../../utils/logger');

/**
 * @description Handle a new event
 * @param {string} type - The type of the event.
 * @param {Object} [event] - The event object.
 * @example
 * handleEvent('sun.sunrise');
 */
function handleEvent(type, event) {
  try {
    this.triggerDictionnary[type].forEach((trigger) => {
      const valid = verifiers[type] ? verifiers[type](trigger, event) : true;
      if (valid) {
        trigger.scenes.forEach((scene) => {

        });
      }
    });
  } catch (e) {
    logger.error(e);
  }
}

module.exports = {
  handleEvent,
};
