const { setImage } = require('./camera.setImage');
const { getImage } = require('./camera.getImage');

const Camera = function Camera(stateManager, deviceManager) {
  this.stateManager = stateManager;
  this.deviceManager = deviceManager;
};

Camera.prototype.setImage = setImage;
Camera.prototype.getImage = getImage;

module.exports = Camera;
