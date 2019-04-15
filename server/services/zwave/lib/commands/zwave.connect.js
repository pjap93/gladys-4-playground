const logger = require('../../../../utils/logger');

/**
 * @description Connect to Zwave USB driver
 * @example
 * zwave.connect();
 */
function connect() {
  logger.debug(`Zwave : Connecting to USB = ${this.driverPath}`);
  this.zwave.connect(this.driverPath);
}

module.exports = {
  connect,
};
