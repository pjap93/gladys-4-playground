const { NotFoundError } = require('../../../utils/coreErrors');

/**
 * @description Set image of a camera.
 * @param {string} selector - Selector of the camera.
 * @param {string} image - Image in base64.
 * @example
 * camera.setImage('test-camera', 'sfdsf');
 */
async function setImage(selector, image) {
  const deviceFeature = this.stateManager.get('deviceFeature', selector);
  if (deviceFeature === null) {
    throw new NotFoundError('Camera not found');
  }
  await this.deviceManager.saveStringState(deviceFeature, image);
}

module.exports = {
  setImage,
};
