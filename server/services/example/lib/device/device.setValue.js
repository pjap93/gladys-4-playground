
/**
 * @private
 * @description Change the value of a device.
 * @param {string} externalId - The ID of the lamp we want to control.
 * @param {number} newValue - The new value to apply to the device.
 * @returns {Promise} Resolving with the new value.
 * @example
 * setValue('1', 12);
 */
function setValue(externalId, newValue) {
  return this.client.post(`https://some-api/${externalId}/${newValue}`);
}

module.exports = setValue;
