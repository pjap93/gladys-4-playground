const logger = require('../../../../utils/logger');

/**
 * @description When a node is ready.
 * @param {number} nodeId - The ID of the node.
 * @param {Object} nodeInfo - Informations about the node.
 * @example
 * zwave.on('node ready', this.nodeReady);
 */
function nodeReady(nodeId, nodeInfo) {
  logger.debug(`Zwave : Node Event, nodeId = ${nodeId}, nodeInfo = ${nodeInfo}`);
  this.nodes[nodeId].manufacturer = nodeInfo.manufacturer;
  this.nodes[nodeId].manufacturerid = nodeInfo.manufacturerid;
  this.nodes[nodeId].product = nodeInfo.product;
  this.nodes[nodeId].producttype = nodeInfo.producttype;
  this.nodes[nodeId].productid = nodeInfo.productid;
  this.nodes[nodeId].type = nodeInfo.type;
  this.nodes[nodeId].name = nodeInfo.name;
  this.nodes[nodeId].loc = nodeInfo.loc;
  this.nodes[nodeId].ready = true;
}

module.exports = {
  nodeReady,
};
