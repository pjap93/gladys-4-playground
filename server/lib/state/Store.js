
const Store = function Store() {
  this.state = {};
};

/**
 * @description Merge a given state with the current state.
 * @param {Object} update - Object to merge in the state.
 * @example
 * store.setState({
 *   alarm: 'disarmed',
 * });
 */
function setState(update) {
  Object.keys(update).forEach((key) => {
    this.state[key] = update[key];
  });
}
/**
 * @description Return the value of a key in the store.
 * @param {string} key - The key to lookup in the store.
 * @returns {any} Return the value of the key.
 * @example
 * store.get('alarm');
 */
function get(key) {
  return this.state[key];
}

Store.prototype.setState = setState;
Store.prototype.get = get;

module.exports = Store;
