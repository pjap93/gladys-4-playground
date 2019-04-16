const Promise = require('bluebird');
const { BadParameters } = require('../../utils/coreErrors');
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
    // external_id is a required parameter
    if (!device.external_id) {
      throw new BadParameters('A device must have an external_id.');
    }
    // first verify that device doesn't already exist
    let deviceInDatabase = this.stateManager.get('deviceByExternalId', device.external_id);

    // if it doesn't exist, we create it
    if (deviceInDatabase === null) {
      deviceInDatabase = (await db.Device.create(device, { transaction })).get({ plain: true });
    }

    // if we need to create features
    if (features && features.length) {
      deviceInDatabase.features = await Promise.map(features, async (feature) => {
        feature.device_id = deviceInDatabase.id;
        const featureCreated = await db.DeviceFeature.create(feature, { transaction });
        return featureCreated.get({ plain: true });
      });
    } else {
      deviceInDatabase.features = [];
    }

    // if we need to create param
    if (params && params.length) {
      deviceInDatabase.params = await Promise.map(params, async (param) => {
        param.device_id = deviceInDatabase.id;
        const paramCreated = await db.DeviceParam.create(param, { transaction });
        return paramCreated.get({ plain: true });
      });
    } else {
      deviceInDatabase.params = [];
    }

    // save created device in RAM
    this.add(deviceInDatabase);

    return deviceInDatabase;
  });
}

module.exports = {
  create,
};
