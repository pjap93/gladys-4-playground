
/**
 * @description Add ability to connect to a MQTT broker.
 * @param {Object} gladys - Gladys instance.
 * @param {Object} mqttClient - MqttClient.
 * @param {string} serviceId - UUID of the service in DB.
 * @example
 * const mqttHandler = new MqttHandler(gladys, client, serviceId);
 */
const MqttHandler = function MqttHandler(gladys, mqttClient, serviceId) {
  this.gladys = gladys;
  this.mqttClient = mqttClient;
  this.serviceId = serviceId;
};

module.exports = MqttHandler;
