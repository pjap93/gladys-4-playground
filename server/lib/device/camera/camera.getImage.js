const { NotFoundError } = require('../../../utils/coreErrors');

/**
 * @description Get image of a camera.
 * @param {string} selector - Selector of the camera.
 * @example
 * camera.getImage('test-camera');
 */
async function getImage(selector) {
  const deviceFeature = this.stateManager.get('deviceFeature', selector);
  if (deviceFeature === null) {
    throw new NotFoundError('Camera not found');
  }
  return Promise.resolve(deviceFeature.last_value_string);
}

module.exports = {
  getImage,
};
