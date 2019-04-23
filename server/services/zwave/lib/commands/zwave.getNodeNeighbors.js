const logger = require('../../../../utils/logger');

/**
 * @description Getting neighbors of all nodes.
 * @returns {Array} Return array of nodes and their neighbors.
 * @example
 * zwave.getNodeNeighbors();
 */
function getNodeNeighbors() {
  logger.debug(`Zwave : Getting node neighbors...`);
  const nodeIds = Object.keys(this.nodes);
  const nodes = nodeIds.map((nodeId) => {
    const neighbors = this.zwave.getNodeNeighbors(nodeId);
    return {
      id: nodeId,
      manufacturer: this.nodes[nodeId].manufacturer,
      product: this.nodes[nodeId].product,
      neighbors,
    };
  });
  return nodes;
}

module.exports = {
  getNodeNeighbors,
};
