const db = require('../../models');

const DEFAULT_OPTIONS = {
  fields: ['id', 'firstname', 'lastname', 'selector', 'email'],
  expand: [],
  take: 20,
  skip: 0,
};

/**
 * @description Get list of users
 * @param {Object} options - Options of the query.
 * @example
 * const users = await gladys.user.get({
 *  take: 20,
 *  skip: 0
 * });
 */
async function get(options) {
  const optionsWithDefault = Object.assign({}, DEFAULT_OPTIONS, options);

  // add ability to get house
  const includeExpand = [];
  if (optionsWithDefault.expand.includes('current_house')) {
    includeExpand.push({
      model: db.House,
      as: 'current_house',
    });
  }

  const users = await db.User.findAll({
    attributes: optionsWithDefault.fields,
    include: includeExpand,
    limit: optionsWithDefault.take,
    offset: optionsWithDefault.skip,
    order: [
      ['created_at', 'ASC'],
    ],
  });

  const usersPlain = users.map(user => user.get({ plain: true }));

  return usersPlain;
}

module.exports = {
  get,
};
