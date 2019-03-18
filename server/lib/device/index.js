const LightManager = require('./light');
const { add } = require('./device.add');
const { saveState } = require('./device.saveState');

const DeviceManager = function DeviceManager(eventManager, messageManager, stateManager, services) {
  this.eventManager = eventManager;
  this.messageManager = messageManager;
  this.stateManager = stateManager;
  this.services = services;
  this.lightManager = new LightManager(eventManager, messageManager, this);
};

DeviceManager.prototype.add = add;
DeviceManager.prototype.saveState = saveState;

module.exports = DeviceManager;
