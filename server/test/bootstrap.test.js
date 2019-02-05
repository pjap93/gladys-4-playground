const db = require('../models');
const server = require('../controllers/index');
require('should');
const user = require('../seeders/20190205071039-demo-user');

process.env.NODE_ENV = 'test';

before(() => {
  global.TEST_BACKEND_APP = server.start();
});

beforeEach(async () => {
  await user.down(db.sequelize.getQueryInterface());
  await user.up(db.sequelize.getQueryInterface());
});
