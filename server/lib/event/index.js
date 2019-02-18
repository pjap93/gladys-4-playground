const EventEmitter = require('events');

const Event = function Event() {
  this.emitter = new EventEmitter();
};

Event.prototype.emit = function emit(event, data) {
  this.emitter.emit(event, data);
};

Event.prototype.emit = function emit(event, data) {
  this.emitter.emit(event, data);
};

module.exports = Event;
