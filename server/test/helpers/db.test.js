const { readdirSync } = require('fs');
const Promise = require('bluebird');
const { join } = require('path');
const db = require('../../models');

const SEEDERS_PATH = join(__filename, '../../../seeders');

const files = readdirSync(SEEDERS_PATH);
const seeds = files.map(file => require(join(SEEDERS_PATH, file))); // eslint-disable-line
const reversedSeed = seeds.slice().reverse();

module.exports.seedDb = async () => {
  await Promise.mapSeries(seeds, (seed => seed.up(db.sequelize.getQueryInterface())));
};

module.exports.cleanDb = async () => {
  await Promise.mapSeries(reversedSeed, (seed => seed.down(db.sequelize.getQueryInterface())));
};
