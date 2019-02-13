const services = require('../../services');

// only here for the demo, should be stored in DB
const SERVICE_TO_LOAD = ['example'];

/**
 * @public
 * @description Load all services
 * @param {Object} gladys - Gladys instance.
 * @example
 * load(gladys);
 */
function load(gladys) {
  SERVICE_TO_LOAD.forEach((service) => {
    services[service](gladys).start();
  });
}

module.exports = {
  load,
};
