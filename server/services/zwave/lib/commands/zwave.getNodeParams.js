const logger = require('../../../../utils/logger');

/**
 * @description Request all params of a node.
 * @param {number} nodeId - The NodeId.
 * @example
 * zwave.getNodeParams(1);
 */
function getNodeParams(nodeId) {
  logger.debug(`Zwave : Request all params of nodeId = ${nodeId}`);
  this.zwave.requestAllConfigParams(nodeId);
}

module.exports = {
  getNodeParams,
};
