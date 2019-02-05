const db = require('../../models');
const passwordUtils = require('../../utils/password');
const { validateCreate } = require('./user.validate');

/**
 * @public
 * @description This function create a user.
 * @name gladys.user.create
 * @param {Object} user - A new user.
 * @param {string} user.firstname - The firstname of the user.
 * @param {string} user.lastname - The lastname of the user.
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The password for his account (min 8 characters).
 * @example
 * await gladys.user.create({
 *  firstname: 'Tony'
 * });
 *
 */
async function create(user) {
  const userValidated = validateCreate(user);
  const userToInsert = {
    firstname: userValidated.firstname,
    lastname: userValidated.lastname,
    email: userValidated.email,
    password_hash: await passwordUtils.hash(userValidated.password),
  };
  return db.User.create(userToInsert);
}

module.exports = {
  create,
};
