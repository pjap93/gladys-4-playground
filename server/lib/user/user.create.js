const db = require('../../models');

/**
 * @public
 * @description This function create a user.
 * @name gladys.user.create
 * @param {Object} user - A new user.
 * @param {string} user.firstname - The firstname of the user.
 * @param {string} user.lastname - The lastname of the user.
 * @param {string} user.email - The email of the user.
 * @param {string} user.password - The password for his account (min 8 characters).
 * @param {string} user.birthdate - The birthdate of the user.
 * @param {string} user.language - The language of the user.
 * @param {string} user.role - The role of the user (admin, habitant, guest).
 * @returns {Promise} Promise.
 * @example
 * await gladys.user.create({
 *  firstname: 'Tony'
 * });
 *
 */
async function create(user) {
  return db.User.create(user);
}

module.exports = {
  create,
};
