const db = require('../../models');

const DEFAULT_OPTIONS = {
  expand: [],
};

/**
 * @public
 * @description Get house
 * @param {Object} [options] - Options of the query.
 * @param {Array} options.expand - Array of fields to expand.
 * @returns {Promise} Resolve with array of houses.
 * @example
 * const houses = await gladys.house.get();
 */
async function get(options) {
  const optionsWithDefault = Object.assign({}, DEFAULT_OPTIONS, options);
  const include = [];
  if (optionsWithDefault.expand.includes('rooms')) {
    include.push({
      model: db.Room,
      as: 'rooms',
    });
  }
  const houses = await db.House.findAll({
    include,
  });
  const housesPlain = houses.map(house => house.get({ plain: true }));
  return housesPlain;
}

module.exports = {
  get,
};
