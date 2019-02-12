
const Service = require('./service');
const Session = require('./session');
const User = require('./user');

module.exports = function Gladys() {
  const user = User();
  const service = Service();
  const session = Session();

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
    session,
  };

  // freeze Gladys object to ensure it's not modified
  return Object.freeze(gladys);
};
