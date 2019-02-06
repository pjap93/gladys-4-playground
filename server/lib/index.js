
const Service = require('./service');
const User = require('./user');

module.exports = function Gladys() {
  const user = User();
  const service = Service();

  /**
 * @private
 * @description This function starts Gladys core
 * @name gladys.start
 * @example
 * gladys.start();
 */
  async function start() {
    service.load();
  }

  const gladys = {
    start,
    user,
    service,
  };

  // freeze Gladys object to ensure it's not modified
  return Object.freeze(gladys);
};
