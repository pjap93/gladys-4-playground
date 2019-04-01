const db = require('../../models');

/**
 * @public
 * @description Get house
 * @returns {Promise} Resolve with array of houses.
 * @example
 * const houses = await gladys.house.get();
 */
async function get() {
  const houses = await db.House.findAll();
  const housesPlain = houses.map(house => house.get({ plain: true }));
  return housesPlain;
}

module.exports = {
  get,
};
