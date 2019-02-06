const logger = require('../../utils/logger');

module.exports = function ExampleService() {
  /**
   * @public
   * @description This function starts the ExampleService service
   * @example
   * gladys.services.example.start();
   */
  function start() {
    logger.log('starting example service');
  }

  /**
   * @public
   * @description This function stops the ExampleService service
   * @example
   * gladys.services.example.stop();
   */
  function stop() {
    logger.log('stopping example service');
  }

  return Object.freeze({
    start,
    stop,
  });
};
