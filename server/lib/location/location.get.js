const { Op } = require('sequelize');
const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Get Location By User
 * @param {string} userSelector - The selector of the user to get location from.
 * @param {string} from - Start date.
 * @param {string} to - End date.
 * @example
 * gladys.location.get('tony', '2019-04-02 04:41:09', '2019-04-02 04:41:09');
 */
async function get(userSelector, from, to) {
  const user = await db.User.findOne({
    where: {
      selector: userSelector,
    },
  });

  if (user === null) {
    throw new NotFoundError('User not found');
  }

  const locations = db.Location.findAll({
    where: {
      user_id: user.id,
      created_at: {
        [Op.gte]: new Date(from),
        [Op.lte]: new Date(to),
      },
    },
  });

  const locationsPlain = locations.map(location => location.get({ plain: true }));

  return locationsPlain;
}

module.exports = {
  get,
};
