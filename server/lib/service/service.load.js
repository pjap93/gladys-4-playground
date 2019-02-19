const services = require('../../services');

// only here for the demo, should be stored in DB
const SERVICE_TO_LOAD = ['example', 'telegram'];

/**
 * @public
 * @description Load all services
 * @param {Object} gladys - Gladys object.
 * @example
 * service.load(gladys);
 */
function load(gladys) {
  SERVICE_TO_LOAD.forEach((service) => {
    this.services[service] = services[service](gladys);
  });
}

module.exports = {
  load,
};
