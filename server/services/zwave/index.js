const logger = require('../../utils/logger');
const ZwaveManager = require('./lib');
const { ServiceNotConfiguredError } = require('../../utils/coreErrors');

module.exports = function ZwaveService(gladys, serviceId) {
  const Zwave = require('openzwave-shared');
  let zwaveManager;
  /**
   * @public
   * @description This function starts the service
   * @example
   * gladys.services.zwave.start();
   */
  async function start() {
    logger.info('Starting zwave service');
    const zwaveDriverPath = await gladys.variable.getValue('ZWAVE_DRIVER_PATH', serviceId);
    if (!zwaveDriverPath) {
      throw new ServiceNotConfiguredError('No zwave driver path found. Not starting ZWave service.');
    }
    zwaveManager = new ZwaveManager(Zwave, zwaveDriverPath);
    zwaveManager.connect();
  }

  /**
   * @public
   * @description This function stops the service
   * @example
   * gladys.services.zwave.stop();
   */
  async function stop() {
    logger.log('stopping zwave service');
    zwaveManager.disconnect();
  }

  return Object.freeze({
    start,
    stop,
  });
};
