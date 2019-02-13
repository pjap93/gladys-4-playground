
/**
 * @private
 * @description Change the value of a device.
 * @param {Object} deviceFeature - The deviceFeature we wants to control.
 * @param {number} newValue - The new value to apply to the device.
 * @returns {Promise} Resolving with the new value.
 * @example
 * setValue(deviceFeature, 12);
 */
function setValue(deviceFeature, newValue) {
  return this.client.post(`https://some-api/${deviceFeature.external_id}/${newValue}`);
}

module.exports = setValue;
