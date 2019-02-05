const db = require('../../models');
const passwordUtils = require('../../utils/password');

module.exports = async function create(user) {
  const userToInsert = {
    firstname: user.firstname,
    lastname: user.lastname,
    email: user.email,
    password_hash: await passwordUtils.hash(user.password),
  };
  return db.User.create(userToInsert);
};
