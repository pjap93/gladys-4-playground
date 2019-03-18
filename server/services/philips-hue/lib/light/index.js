const { configureBridge } = require('./light.configureBridge');
const { getBridges } = require('./light.getBridges');

/**
 * @description Add ability to control a Philips Hue light
 * @param {Object} gladys - Gladys instance.
 * @param {Object} hueClient - Philips Hue Client.
 * @param {string} serviceId - UUID of the service in DB.
 * @example
 * const exampleLightHandler = new ExampleLightHandler(gladys, client, serviceId);
 */
const PhilipsHueLightHandler = function PhilipsHueLightHandler(gladys, hueClient, serviceId) {
  this.gladys = gladys;
  this.hueClient = hueClient;
  this.serviceId = serviceId;
  const { HueApi } = this.hueClient;
  this.hueApi = new HueApi();
};

PhilipsHueLightHandler.prototype.configureBridge = configureBridge;
PhilipsHueLightHandler.prototype.getBridges = getBridges;

module.exports = PhilipsHueLightHandler;
