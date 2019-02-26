const Store = require('./Store');

const StateManager = function StateManager(event) {
  this.event = event;
  this.state = {
    house: {},
    user: {},
    deviceFeature: {},
    sun: {},
  };
};

StateManager.prototype.setState = function setState(entity, entitySelector, update) {
  if (!this.state[entity][entitySelector]) {
    this.state[entity][entitySelector] = new Store();
  }
  this.state[entity][entitySelector].setState(update);
};

StateManager.prototype.get = function get(entity, entitySelector, key) {
  if (!this.state[entity][entitySelector]) {
    return null;
  }
  return this.state[entity][entitySelector].get(key);
};

module.exports = StateManager;
