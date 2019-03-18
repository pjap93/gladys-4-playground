const logger = require('../../../../utils/logger');
const { Error400 } = require('../../../../utils/httpErrors');

/**
 * @description Configure the philips hue bridge.
 * @param {string} name - Name of the bridge.
 * @param {string} ipAddress - IP Address of the Philips Hue Bridge.
 * @example
 * configureBridge('162.198.1.1');
 */
async function configureBridge(name, ipAddress) {
  let userId;
  try {
    userId = await this.hueApi.registerUser(ipAddress, 'Gladys');
  } catch (e) {
    logger.warn(`PhilipsHueService : configureBridge : There was an error while configuring the bridge. Did you press the button?`);
    logger.warn(e);
    throw new Error400();
  }
  return this.gladys.device.create({
    name,
    service_id: this.serviceId,
  }, [], [{
    name: 'BRIDGE_IP_ADDRESS',
    value: ipAddress,
  }, {
    name: 'BRIDGE_USER_ID',
    value: userId,
  }]);
}

module.exports = {
  configureBridge,
};
