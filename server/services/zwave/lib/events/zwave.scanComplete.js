const logger = require('../../../../utils/logger');

/**
 * @description When the scan is complete
 * @example
 * zwave.on('scan complete', this.scanComplete);
 */
function scanComplete() {
  logger.debug(`Zwave : Scan Complete!`);
}

module.exports = {
  scanComplete,
};
