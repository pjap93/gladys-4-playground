
/**
 * @description Return external id of deviceFeature
 * @param {Object} value - The zwave value.
 * @returns {string} Return external id.
 * @example
 * getDeviceFeatureExternalId(value);
 */
function getDeviceFeatureExternalId(value) {
  return `zwave:node_id:${value.node_id}:comclass:${value.class_id}:index:${value.index}:instance:${value.instance}`;
}

module.exports = {
  getDeviceFeatureExternalId,
};
