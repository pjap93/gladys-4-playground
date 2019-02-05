const logger = require('../../utils/logger');

module.exports = function ExampleService() {
  function start() {
    logger.log('starting example service');
  }

  function stop() {
    logger.log('stopping example service');
  }

  return {
    start,
    stop,
  };
};
