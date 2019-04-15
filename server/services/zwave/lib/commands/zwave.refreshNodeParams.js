const logger = require('../../../../utils/logger');

/**
 * @description Request all params of a node.
 * @param {number} nodeId - The NodeId.
 * @example
 * zwave.refreshNodeParams(1);
 */
function refreshNodeParams(nodeId) {
  logger.debug(`Zwave : Request all params of nodeId = ${nodeId}`);
  this.zwave.requestAllConfigParams(nodeId);
}

module.exports = {
  refreshNodeParams,
};
