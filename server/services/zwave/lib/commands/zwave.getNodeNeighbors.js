const logger = require('../../../../utils/logger');

/**
 * @description Getting neighbors of a node.
 * @param {number} nodeId - The id of the node.
 * @returns {Array} Return array of neighbors.
 * @example
 * zwave.getNodeNeighbors(1);
 */
function getNodeNeighbors(nodeId) {
  logger.debug(`Zwave : Getting node neighbors of node ${nodeId}...`);
  const neighbors = this.zwave.getNodeNeighbors(nodeId);
  return neighbors;
}

module.exports = {
  getNodeNeighbors,
};
