const logger = require('../../../../utils/logger');

/**
 * @description Heal Zwave network
 * @example
 * zwave.healNetwork();
 */
function healNetwork() {
  logger.debug(`Zwave : Heal network.`);
  this.zwave.healNetwork();
}

module.exports = {
  healNetwork,
};
