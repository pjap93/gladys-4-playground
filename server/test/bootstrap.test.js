const db = require('../models');
const server = require('../api/');
const Gladys = require('../lib');
const logger = require('../utils/logger');
require('should');
const user = require('../seeders/20190205071039-demo-user');
const location = require('../seeders/20190211053203-demo-location');

const SERVER_PORT = 6500;

process.env.JWT_SECRET = 'secret';

before(async () => {
  const gladys = Gladys();
  await gladys.start();
  // @ts-ignore
  global.TEST_BACKEND_APP = server.start(gladys, SERVER_PORT);
});

beforeEach(async () => {
  try {
    await location.down(db.sequelize.getQueryInterface());
    await user.down(db.sequelize.getQueryInterface());
    await user.up(db.sequelize.getQueryInterface());
    await location.up(db.sequelize.getQueryInterface());
  } catch (e) {
    logger.trace(e);
    throw e;
  }
});
