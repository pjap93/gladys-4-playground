const { create } = require('./user.create');
const { login } = require('./user.login');

module.exports = function User() {
  return {
    create,
    login,
  };
};
