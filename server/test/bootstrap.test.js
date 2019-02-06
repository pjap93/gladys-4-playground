const db = require('../models');
const server = require('../api/');
const Gladys = require('../lib');
require('should');
const user = require('../seeders/20190205071039-demo-user');

const SERVER_PORT = 6500;

before(async () => {
  const gladys = Gladys();
  await gladys.start();
  // @ts-ignore
  global.TEST_BACKEND_APP = server.start(gladys, SERVER_PORT);
});

beforeEach(async () => {
  await user.down(db.sequelize.getQueryInterface());
  await user.up(db.sequelize.getQueryInterface());
});
