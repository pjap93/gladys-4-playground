const { EVENTS } = require('../../utils/constants');
const { eventFunctionWrapper } = require('../../utils/functionsWrapper');
const LightManager = require('./light');
const TemperatureSensorManager = require('./temperature-sensor');
const { add } = require('./device.add');
const { addFeature } = require('./device.addFeature');
const { addParam } = require('./device.addParam');
const { create } = require('./device.create');
const { init } = require('./device.init');
const { poll } = require('./device.poll');
const { pollAll } = require('./device.pollAll');
const { saveState } = require('./device.saveState');
const { setParam } = require('./device.setParam');
const { setValue } = require('./device.setValue');
const { setupPoll } = require('./device.setupPoll');
const { newStateEvent } = require('./device.newStateEvent');

const DeviceManager = function DeviceManager(eventManager, messageManager, stateManager, serviceManager, roomManager) {
  this.eventManager = eventManager;
  this.messageManager = messageManager;
  this.stateManager = stateManager;
  this.serviceManager = serviceManager;
  this.roomManager = roomManager;
  this.lightManager = new LightManager(eventManager, messageManager, this);
  this.temperatureSensorManager = new TemperatureSensorManager(eventManager, messageManager, this);
  this.devicesByPollFrequency = {};
  // listen to events
  this.eventManager.on(EVENTS.DEVICE.NEW_STATE, this.newStateEvent.bind(this));
  this.eventManager.on(EVENTS.DEVICE.NEW, eventFunctionWrapper(this.create.bind(this)));
  this.eventManager.on(EVENTS.DEVICE.ADD_FEATURE, eventFunctionWrapper(this.addFeature.bind(this)));
  this.eventManager.on(EVENTS.DEVICE.ADD_PARAM, eventFunctionWrapper(this.addParam.bind(this)));
};

DeviceManager.prototype.add = add;
DeviceManager.prototype.addFeature = addFeature;
DeviceManager.prototype.addParam = addParam;
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
