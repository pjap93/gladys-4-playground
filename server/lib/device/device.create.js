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
    const deviceInStore = this.stateManager.get('deviceByExternalId', device.external_id);
    let deviceToReturn = deviceInStore;

    // if it doesn't exist, we create it
    if (deviceInStore === null) {
      deviceToReturn = (await db.Device.create(device, { transaction })).get({ plain: true });
    }

    // if we need to create features
    if (features && features.length) {
      const newFeatures = await Promise.map(features, async (feature) => {
        if (deviceInStore !== null) {
          // if the device feature already exist
          const featureIndex = deviceInStore.features.findIndex(f => f.external_id === feature.external_id);
          if (featureIndex !== -1) {
            return device.features[featureIndex];
          }
        }
        // if not, we create it
        feature.device_id = deviceToReturn.id;
        const featureCreated = await db.DeviceFeature.create(feature, { transaction });
        return featureCreated.get({ plain: true });
      });
      deviceToReturn.features = newFeatures;
    } else {
      deviceToReturn.features = [];
    }

    // if we need to create param
    if (params && params.length) {
      const newParams = await Promise.map(params, async (param) => {
        if (deviceInStore !== null) {
          // if the param already already exist
          const paramIndex = deviceInStore.params.findIndex(p => p.name === param.name);
          if (paramIndex !== -1) {
            return deviceInStore.params[paramIndex];
          }
        }
        // if not, we create it.
        param.device_id = deviceToReturn.id;
        const paramCreated = await db.DeviceParam.create(param, { transaction });
        return paramCreated.get({ plain: true });
      });
      deviceToReturn.params = newParams;
    } else {
      deviceToReturn.params = [];
    }

    // save created device in RAM
    this.add(deviceToReturn);

    return deviceToReturn;
  });
}

module.exports = {
  create,
};
