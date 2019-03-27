const { EVENTS } = require('../../utils/constants');
const LightManager = require('./light');
const { add } = require('./device.add');
const { create } = require('./device.create');
const { init } = require('./device.init');
const { poll } = require('./device.poll');
const { pollAll } = require('./device.pollAll');
const { saveState } = require('./device.saveState');
const { setParam } = require('./device.setParam');
const { setValue } = require('./device.setValue');
const { setupPoll } = require('./device.setupPoll');
const { newStateEvent } = require('./device.newStateEvent');

const DeviceManager = function DeviceManager(eventManager, messageManager, stateManager, serviceManager) {
  this.eventManager = eventManager;
  this.messageManager = messageManager;
  this.stateManager = stateManager;
  this.serviceManager = serviceManager;
  this.lightManager = new LightManager(eventManager, messageManager, this);
  this.eventManager.on(EVENTS.SENSOR.STATE_CHANGED, this.newStateEvent);
  this.devicesByPollFrequency = {};
};

DeviceManager.prototype.add = add;
DeviceManager.prototype.create = create;
DeviceManager.prototype.init = init;
DeviceManager.prototype.poll = poll;
DeviceManager.prototype.pollAll = pollAll;
DeviceManager.prototype.newStateEvent = newStateEvent;
DeviceManager.prototype.saveState = saveState;
DeviceManager.prototype.setParam = setParam;
DeviceManager.prototype.setupPoll = setupPoll;
DeviceManager.prototype.setValue = setValue;

module.exports = DeviceManager;
