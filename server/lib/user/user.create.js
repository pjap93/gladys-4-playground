const db = require('../../models');
const passwordUtils = require('../../utils/password');
const { validateCreate } = require('./user.validate');

module.exports = async function create(user) {
  const userValidated = validateCreate(user);
  const userToInsert = {
    firstname: userValidated.firstname,
    lastname: userValidated.lastname,
    email: userValidated.email,
    password_hash: await passwordUtils.hash(userValidated.password),
  };
  return db.User.create(userToInsert);
};
