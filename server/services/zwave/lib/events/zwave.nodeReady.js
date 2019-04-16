const logger = require('../../../../utils/logger');
const { EVENTS } = require('../../../../utils/constants');

/**
 * @description When a node is ready.
 * @param {number} nodeId - The ID of the node.
 * @param {Object} nodeInfo - Informations about the node.
 * @example
 * zwave.on('node ready', this.nodeReady);
 */
function nodeReady(nodeId, nodeInfo) {
  logger.debug(`Zwave : Node Ready, nodeId = ${nodeId}`);
  this.nodes[nodeId].manufacturer = nodeInfo.manufacturer;
  this.nodes[nodeId].manufacturerid = nodeInfo.manufacturerid;
  this.nodes[nodeId].product = nodeInfo.product;
  this.nodes[nodeId].producttype = nodeInfo.producttype;
  this.nodes[nodeId].productid = nodeInfo.productid;
  this.nodes[nodeId].type = nodeInfo.type;
  this.nodes[nodeId].name = nodeInfo.name;
  this.nodes[nodeId].loc = nodeInfo.loc;
  this.nodes[nodeId].ready = true;
  const newDevice = {
    name: this.nodes[nodeId].product,
    service_id: this.serviceId,
    external_id: `zwave:node_id:${nodeId}`,
  };
  const features = [];
  const params = [];
  const comclasses = Object.keys(this.nodes[nodeId].classes);
  comclasses.forEach((comclass) => {
    const values = this.nodes[nodeId].classes[comclass];
    // enable poll
    switch (values.class_id) {
    case 0x25: // COMMAND_CLASS_SWITCH_BINARY
    case 0x26: // COMMAND_CLASS_SWITCH_MULTILEVEL
      this.zwave.enablePoll(nodeId, comclass);
      break;
    default:
      break;
    }
    const indexes = Object.keys(values);
    indexes.forEach((idx) => {
      const { min, max } = values[idx];
      let { type } = values[idx];

      if (type === 'bool') {
        type = 'binary';
      }

      if (values[idx].genre === 'user') {
        features.push({
          name: `${values[idx].label} - ${this.nodes[nodeId].product} - ${nodeId}`,
          type,
          external_id: `zwave:node_id:${nodeId}:comclass:${comclass}:index:${values[idx].index}`,
          read_only: values[idx].read_only,
          unit: values[idx].units,
          has_feedback: true,
          min,
          max,
        });
      } else {
        params.push({
          name: values[idx].label,
          value: values[idx].value,
        });
      }
    });
  });
  this.eventManager.emit(EVENTS.DEVICE.NEW, newDevice, features, params);
}

module.exports = {
  nodeReady,
};
