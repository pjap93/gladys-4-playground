const { NotFoundError, BadParameters } = require('../../../utils/coreErrors');

// Image should be < 50ko
const MAX_SIZE_IMAGE = 50 * 1024;

/**
 * @description Set image of a camera.
 * @param {string} selector - Selector of the camera.
 * @param {string} image - Image in base64.
 * @example
 * camera.setImage('test-camera', 'sfdsf');
 */
async function setImage(selector, image) {
  if (image.length > MAX_SIZE_IMAGE) {
    throw new BadParameters('Image is too big');
  }
  const deviceFeature = this.stateManager.get('deviceFeature', selector);
  if (deviceFeature === null) {
    throw new NotFoundError('Camera not found');
  }
  await this.deviceManager.saveStringState(deviceFeature, image);
}

module.exports = {
  setImage,
};
