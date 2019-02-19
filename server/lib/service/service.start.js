
/**
 * @public
 * @description Load all services
 * @example
 * service.load();
 */
async function start() {
  Object.keys(this.services).forEach((serviceKey) => {
    this.services[serviceKey].start();
  });
}

module.exports = {
  start,
};
