
const service = require('./service');
const user = require('./user');

function start() {
  service.load();
}

const gladys = {
  service,
  user,
  start,
};

module.exports = gladys;
