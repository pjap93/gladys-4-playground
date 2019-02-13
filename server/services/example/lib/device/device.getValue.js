
/**
 * @private
 * @description Get the value of a device.
 * @param {Object} deviceFeature - The deviceFeature object.
 * @returns {Promise} Resolving with device value.
 * @example
 * getValue(deviceFeature);
 */
function getValue(deviceFeature) {
  return this.client.get(`https://some-api/${deviceFeature.external_id}`);
}

module.exports = getValue;
