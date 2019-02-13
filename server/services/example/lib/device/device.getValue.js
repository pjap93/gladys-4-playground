
/**
 * @private
 * @description Get the value of a device.
 * @param {string} externalId - The ID of the lamp we want to control.
 * @returns {Promise} Resolving with device value.
 * @example
 * getValue('1');
 */
function getValue(externalId) {
  return this.client.get(`https://some-api/${externalId}`);
}

module.exports = getValue;
