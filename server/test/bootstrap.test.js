const db = require('../models');
const user = require('../seeders/20190205071039-demo-user');

process.env.NODE_ENV = 'test';

beforeEach(async () => {
  await user.down(db.sequelize.getQueryInterface());
  await user.up(db.sequelize.getQueryInterface());
});
