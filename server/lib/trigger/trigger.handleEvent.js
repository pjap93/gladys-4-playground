const { verifiers } = require('./trigger.verifiers');
const { conditions } = require('./trigger.conditions');
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
        let conditionsValid = true;
        let i = 0;
        while (conditionsValid && i < trigger.conditions.length) {
          conditionsValid = conditions[trigger.conditions[i].type](this.stateManager, event, trigger.conditions[i]);
          i += 1;
        }
        if (conditionsValid) {
          trigger.scenes.forEach(() => {

          });
        }
      }
    });
  } catch (e) {
    logger.error(e);
  }
}

module.exports = {
  handleEvent,
};
