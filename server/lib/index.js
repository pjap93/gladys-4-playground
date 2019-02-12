const { generateJwtSecret } = require('../utils/jwtSecret');
const { Cache } = require('../utils/cache');
const Service = require('./service');
const Session = require('./session');
const User = require('./user');

module.exports = function Gladys() {
  // CONFIG
  const config = {
    jwtSecret: process.env.JWT_SECRET || generateJwtSecret(),
  };

  const cache = new Cache();
  const user = User();
  const service = Service();
  const session = Session(config.jwtSecret);

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
    cache,
    config,
  };

  // freeze Gladys object to ensure it's not modified
  return Object.freeze(gladys);
};
