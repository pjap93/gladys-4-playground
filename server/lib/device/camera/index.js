const { setImage } = require('./camera.setImage');

const Camera = function Camera(stateManager, deviceManager) {
  this.stateManager = stateManager;
  this.deviceManager = deviceManager;
};

Camera.prototype.setImage = setImage;

module.exports = Camera;
