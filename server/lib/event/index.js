const EventEmitter = require('events');

const Event = function Event() {
  this.emitter = new EventEmitter();
};

Event.prototype.emit = function emit(event, data) {
  this.emitter.emit(event, data);
};

Event.prototype.on = function on(event, cb) {
  this.emitter.on(event, cb);
};

module.exports = Event;
