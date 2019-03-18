const LightManager = require('./light');
const { add } = require('./device.add');
const { create } = require('./device.create');
const { saveState } = require('./device.saveState');
const { setParam } = require('./device.setParam');

const DeviceManager = function DeviceManager(eventManager, messageManager, stateManager, serviceManager) {
  this.eventManager = eventManager;
  this.messageManager = messageManager;
  this.stateManager = stateManager;
  this.serviceManager = serviceManager;
  this.lightManager = new LightManager(eventManager, messageManager, this);
};

DeviceManager.prototype.add = add;
DeviceManager.prototype.create = create;
DeviceManager.prototype.saveState = saveState;
DeviceManager.prototype.setParam = setParam;

module.exports = DeviceManager;
