const LightManager = require('./light');
const { add } = require('./device.add');
const { create } = require('./device.create');
const { init } = require('./device.init');
const { saveState } = require('./device.saveState');
const { setParam } = require('./device.setParam');
const { setValue } = require('./device.setValue');

const DeviceManager = function DeviceManager(eventManager, messageManager, stateManager, serviceManager) {
  this.eventManager = eventManager;
  this.messageManager = messageManager;
  this.stateManager = stateManager;
  this.serviceManager = serviceManager;
  this.lightManager = new LightManager(eventManager, messageManager, this);
};

DeviceManager.prototype.add = add;
DeviceManager.prototype.create = create;
DeviceManager.prototype.init = init;
DeviceManager.prototype.saveState = saveState;
DeviceManager.prototype.setParam = setParam;
DeviceManager.prototype.setValue = setValue;

module.exports = DeviceManager;
