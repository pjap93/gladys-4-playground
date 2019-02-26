const { verifiers } = require('./trigger.verifiers');
const { conditionVerifiers } = require('./trigger.conditionVerifiers');
const logger = require('../../utils/logger');


/**
 * @description Evaluate a condition
 * @param {Object} stateManager - A StateManager instance.
 * @param {Object} event - The event triggered.
 * @param {Object} condition - A condition object.
 * @returns {boolean} Return true if condition is valid.
 * @example
 * validateCondition(stateManager, event, condition);
 */
function validateCondition(stateManager, event, condition) {
  const valid = conditionVerifiers[condition.type](stateManager, event, condition);
  if (condition.or) {
    return (valid || validateCondition(stateManager, event, condition.or));
  }

  return valid;
}

/**
 * @description Evaluate if an ensemble of conditions are true.
 * @param {Object} stateManager - A StateManager instance.
 * @param {Object} event - The event triggered.
 * @param {Array} conditions - An array of parallel conditions to evaludate.
 * @example
 * validateConditions(stateManager, event, conditions);
 */
function validateConditions(stateManager, event, conditions) {
  let conditionsValid = true;
  let i = 0;
  while (conditionsValid && i < conditions.length) {
    conditionsValid = validateCondition(stateManager, event, conditions[i]);
    i += 1;
  }
  return conditionsValid;
}

/**
 * @description Handle a new event
 * @param {string} type - The type of the event.
 * @param {Object} [event] - The event object.
 * @example
 * handleEvent('sun.sunrise');
 */
function handleEvent(type, event) {
  try {
    this.triggerDictionnary[type].forEach(async (trigger) => {
      const valid = verifiers[type] ? verifiers[type](trigger, event) : true;
      if (valid) {
        const conditionsValid = validateConditions(this.stateManager, event, trigger.conditions);
        if (conditionsValid) {
          trigger.scenes.forEach((scene) => {
            this.scene.execute(scene);
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
