const db = require('../../models');
const { PasswordNotMatchingError } = require('../../utils/coreErrors');

/**
 * @private
 * @description This function login a user
 * @name gladys.user.login
 * @param {string} email - The email of the user.
 * @param {string} password - The password for his account.
 * @returns {Promise} Promise.
 * @example
 * await gladys.user.login('test@test.fr', 'mypassword');
 *
 */
async function login(email, password) {
  const user = await db.User.findOne({ where: { email } });
  const passwordMatches = await user.comparePassword(password);
  if (passwordMatches !== true) {
    throw new PasswordNotMatchingError();
  }
  return user;
}

module.exports = {
  login,
};
