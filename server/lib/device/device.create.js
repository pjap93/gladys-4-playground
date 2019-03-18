const Promise = require('bluebird');
const db = require('../../models');

/**
 * @description Create a device, its feature and params
 * @param {Object} device - The device object to create.
 * @param {Array} features - An array of features to create for this device.
 * @param {Array} params - An array of params to create for this device.
 * @returns {Promise} Resolve with the device created.
 * @example
 * gladys.device.create({
 *  service_id: '90946a0d-5be2-4740-ac8b-26a2d78f12dd',
 *  name: 'Philips Hue Lamp 1',
 *  external_id: 'philips-hue:1'
 * }, [{
 *    name: 'On/Off',
 *    external_id: 'philips-hue:1:binary',
 *    category: 'light',
 *    type: 'binary',
 *    read_only: false,
 *    keep_history: true,
 *    has_feedback: false,
 *    min: 0,
 *    max: 1
 * }], [{
 *    name: 'IP_ADDRESS',
 *    value: '192.168.1.1'
 * }])
 */
async function create(device, features = [], params = []) {
  return db.sequelize.transaction(async (transaction) => {
    const deviceCreated = (await db.Device.create(device, { transaction })).get({ plain: true });
    // if we need to create features
    if (features && features.length) {
      deviceCreated.features = await Promise.map(features, async (feature) => {
        feature.device_id = deviceCreated.id;
        const featureCreated = await db.DeviceFeature.create(feature, { transaction });
        return featureCreated.get({ plain: true });
      });
    } else {
      deviceCreated.features = [];
    }

    // if we need to create param
    if (params && params.length) {
      deviceCreated.params = await Promise.map(params, async (param) => {
        param.device_id = deviceCreated.id;
        const paramCreated = await db.DeviceParam.create(param, { transaction });
        return paramCreated.get({ plain: true });
      });
    } else {
      deviceCreated.params = [];
    }
    // save created device in RAM
    this.add(deviceCreated);

    return deviceCreated;
  });
}

module.exports = {
  create,
};
