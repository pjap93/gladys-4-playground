const setValue = require('./device.setValue');
const getValue = require('./device.getValue');

/**
 * @description Add ability to control an object
 * @param {Object} gladys - Gladys instance.
 * @param {Object} client - Third-part client object.
 * @example
 * const exampleDeviceHandler = new ExampleDeviceHandler(gladys, client);
 */
const ExampleDeviceHandler = function ExampleDeviceHandler(gladys, client) {
  this.client = client;
  this.gladys = gladys;
};

ExampleDeviceHandler.prototype.setValue = setValue;
ExampleDeviceHandler.prototype.getValue = getValue;

module.exports = ExampleDeviceHandler;
