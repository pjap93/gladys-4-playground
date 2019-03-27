const { NotFoundError } = require('../../utils/coreErrors');
const logger = require('../../utils/logger');

/**
 * @description Poll a device to get new value.
 * @param {Object} device - The device which is going to be polled.
 * @example
 * poll(device);
 */
async function poll(device) {
  logger.debug(`Polling device ${device.selector}`);
  const service = this.serviceManager.getService(device.service.name);
  if (service === null) {
    throw new NotFoundError(`Service ${device.service.name} was not found.`);
  }
  if (typeof service.poll !== 'function') {
    throw new NotFoundError(`Service ${device.service.name} does not have a poll function.`);
  }
  try {
    await service.poll(device);
  } catch (e) {
    logger.error(`There was an error while polling device ${device.selector}`);
    logger.error(e);
  }
}

module.exports = {
  poll,
};
