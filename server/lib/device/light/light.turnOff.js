const logger = require('../../../utils/logger');
const { STATE, EVENTS } = require('../../../utils/constants');

/**
 * @description TurnOff a given deviceFeature.
 * @param {Object} device - The device to turnOff.
 * @param {Object} deviceFeature - The deviceFeature to turnOff.
 * @example
 * light.turnOff(device, deviceFeature);
 */
async function turnOff(device, deviceFeature) {
  logger.debug(`Turning off the light of deviceFeature "${deviceFeature.selector}"`);
  await this.deviceManager.serviceManager.getService(device.service.name).light.turnOff(device, deviceFeature);
  if (!deviceFeature.has_state_feedback) {
    await this.deviceManager.saveState(deviceFeature, STATE.OFF);
  }
  this.eventManager.emit(EVENTS.LIGHT.TURNED_OFF, { device, deviceFeature });
}

module.exports = {
  turnOff,
};
