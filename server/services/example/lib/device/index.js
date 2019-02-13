const setValue = require('./device.setValue');
const getValue = require('./device.getValue');

/**
 * @description Add ability to control an object
 * @param {Object} client - Third-part client object.
 * @example
 * const client = new ExampleDeviceHandler(client);
 */
const ExampleDeviceHandler = function ExampleDeviceHandler(client) {
  this.client = client;
};

ExampleDeviceHandler.prototype.setValue = setValue;
ExampleDeviceHandler.prototype.getValue = getValue;

module.exports = ExampleDeviceHandler;
