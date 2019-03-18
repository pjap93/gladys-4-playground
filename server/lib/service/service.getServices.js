
/**
 * @public
 * @description Return all services.
 * @returns {Object} Return all services.
 * @example
 * service.getServices();
 */
function getServices() {
  return this.services;
}

module.exports = {
  getServices,
};
