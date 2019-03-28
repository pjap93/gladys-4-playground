const logger = require('../../utils/logger');
const MqttHandler = require('./lib');

module.exports = function PhilipsHueService(gladys, serviceId) {
  // require the node-hue-api module
  const mqtt = require('mqtt');
  const mqttHandler = new MqttHandler(gladys, mqtt, serviceId);

  /**
   * @public
   * @description This function starts service
   * @example
   * gladys.services.mqtt.start();
   */
  async function start() {
    logger.log('starting MQTT service');
  }

  /**
   * @public
   * @description This function stops the service
   * @example
   *  gladys.services.mqtt.stop();
   */
  async function stop() {
    logger.log('stopping MQTT service');
  }

  return Object.freeze({
    start,
    stop,
    client: mqttHandler,
  });
};
