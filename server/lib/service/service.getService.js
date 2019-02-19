
/**
 * @public
 * @description Load all services
 * @param {string} name - Name of the service to get.
 * @returns {Object} Return the service or null if not present.
 * @example
 * service.getService('telegram');
 */
function getService(name) {
  if (!this.services[name]) {
    return null;
  }
  return this.services[name];
}

module.exports = {
  getService,
};
