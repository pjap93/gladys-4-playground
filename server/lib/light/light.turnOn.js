const logger = require('../../utils/logger');

/**
 * @description TurnOn a given deviceFeature.
 * @param {Object} deviceFeature - The deviceFeature to turnOn.
 * @example
 * light.turnOn(deviceFeature);
 */
async function turnOn(deviceFeature) {
  logger.debug(`Turning on the light of deviceFeature "${deviceFeature}"`);
}

module.exports = {
  turnOn,
};
