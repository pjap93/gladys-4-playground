const { command } = require('./light.command');
const { turnOn } = require('./light.turnOn');

const Light = function Light(event, message) {
  this.event = event;
  this.message = message;
  this.event.on('intent.light.turnon', this.command.bind(this));
  this.event.on('intent.light.turnoff', this.command.bind(this));
};

Light.prototype.turnOn = turnOn;
Light.prototype.command = command;

module.exports = Light;
