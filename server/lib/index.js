
const service = require('./service');
const user = require('./user');

/**
 * @private
 * @description This function starts Gladys core
 * @name gladys.start
 * @example
 * gladys.start();
 */
function start() {
  service.load();
}

const gladys = {
  service,
  user,
  start,
};

// freeze Gladys object to ensure it's not modified
module.exports = Object.freeze(gladys);
