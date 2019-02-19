
/**
 * @public
 * @description Load all services
 * @param {string} name - Name of the service to get.
 * @example
 * service.getService('telegram');
 */
function getService(name) {
  if (!this.services[name]) {
    throw new Error(`Service ${name} doesn't exist.`);
  }
  return this.services[name];
}

module.exports = {
  getService,
};
