const { readdirSync } = require('fs');
const { join } = require('path');
const db = require('../../models');

const SEEDERS_PATH = join(__filename, '../../../seeders');

const files = readdirSync(SEEDERS_PATH);
const seeds = files.map(file => require(join(SEEDERS_PATH, file))); // eslint-disable-line

module.exports.seedDb = async () => {
  await Promise.all(seeds.map(seed => seed.up(db.sequelize.getQueryInterface())));
};

module.exports.cleanDb = async () => {
  await Promise.all(seeds.map(seed => seed.down(db.sequelize.getQueryInterface())));
};
