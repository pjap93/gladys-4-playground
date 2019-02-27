const { INTENTS } = require('../../utils/constants');
const { command } = require('./light.command');
const { turnOn } = require('./light.turnOn');

const Light = function Light(event, message) {
  this.event = event;
  this.message = message;
  this.event.on(INTENTS.LIGHT.TURN_ON, this.command.bind(this));
};

Light.prototype.turnOn = turnOn;
Light.prototype.command = command;

module.exports = Light;
