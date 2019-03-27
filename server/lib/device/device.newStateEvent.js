const logger = require('../../utils/logger');

/**
 * @description Receive a new state event and save the new state.
 * @param {Object} event - The event object.
 * @param {Object} event.deviceFeature - The deviceFeature concerned.
 * @param {number} event.state - The new state to save.
 * @example
 * newStateEvent({ deviceFeature, state: 12 });
 */
async function newStateEvent({ deviceFeature, state }) {
  try {
    await this.saveState(deviceFeature, state);
  } catch (e) {
    logger.error(`Unable to save new state of deviceFeature ${deviceFeature.selector}, state = ${state}`);
    logger.error(e);
  }
}

module.exports = {
  newStateEvent,
};
