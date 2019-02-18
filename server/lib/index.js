const { generateJwtSecret } = require('../utils/jwtSecret');
const { Cache } = require('../utils/cache');
const Service = require('./service');
const Session = require('./session');
const User = require('./user');

const Gladys = function Gladys() {
  // CONFIG
  const config = {
    jwtSecret: process.env.JWT_SECRET || generateJwtSecret(),
  };

  const cache = new Cache();
  const user = new User();
  const service = new Service();
  const session = new Session(config.jwtSecret);

  const gladys = {
    user,
    service,
    session,
    cache,
    config,
    start: async () => service.load(gladys),
  };

  // freeze Gladys object to ensure it's not modified
  return Object.freeze(gladys);
};

module.exports = Gladys;
