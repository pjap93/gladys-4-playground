/**
 * @description Return array of Nodes.
 * @returns {Array} Return list of nodes.
 * @example
 * const nodes = zwaveManager.getNodes();
 */
function getNodes() {
  const nodeIds = Object.keys(this.nodes);
  return nodeIds.map((nodeId) => Object.assign({}, { id: nodeId }, this.nodes[nodeId]));
}

module.exports = {
  getNodes,
};
