const services = require('../../services');

/**
 * @public
 * @description Start one service by name
 * @param {Object} gladys - The Gladys instance to attach the service to.
 * @param {string} name - The name of the service.
 * @example
 * service.service('telegram');
 */
async function start(gladys, name) {
  if (!this.services[name]) {
    this.services[name] = services[name](gladys);
  }
  await this.services[name].start();
}

module.exports = {
  start,
};
