

const Store = function Store() {
  this.state = {};
};

function setState(update) {
  Object.keys(update).forEach((key) => {
    this.state[key] = update[key];
  });
};

function get(key) {
  return this.state[key];
};

Store.prototype.setState = setState;
Store.prototype.get = get;

module.exports = Store;
