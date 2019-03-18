const LightManager = require('./light');
const { add } = require('./device.add');
const { saveState } = require('./device.saveState');

const DeviceManager = function DeviceManager(eventManager, messageManager, stateManager, serviceManager) {
  this.eventManager = eventManager;
  this.messageManager = messageManager;
  this.stateManager = stateManager;
  this.serviceManager = serviceManager;
  this.lightManager = new LightManager(eventManager, messageManager, this);
};

DeviceManager.prototype.add = add;
DeviceManager.prototype.saveState = saveState;

module.exports = DeviceManager;
