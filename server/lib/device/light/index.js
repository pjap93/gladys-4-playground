const { INTENTS } = require('../../../utils/constants');
const { command } = require('./light.command');
const { init } = require('./light.init');
const { turnOn } = require('./light.turnOn');

const LightManager = function Light(eventManager, messageManager, deviceManager) {
  this.eventManager = eventManager;
  this.messageManager = messageManager;
  this.deviceManager = deviceManager;
  this.eventManager.on(INTENTS.LIGHT.TURN_ON, this.command.bind(this));
};

LightManager.prototype.command = command;
LightManager.prototype.init = init;
LightManager.prototype.turnOn = turnOn;

module.exports = LightManager;
