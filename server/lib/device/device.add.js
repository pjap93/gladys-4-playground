/**
 * @description Load device in memory.
 * @param {Object} device - Device object.
 * @example
 * device.add(device);
 */
function add(device) {
  this.stateManager.setState('device', device.selector, device);
  device.features.forEach((feature) => {
    this.stateManager.setState('deviceFeature', feature.selector, feature);
  });
}

module.exports = {
  add,
};
