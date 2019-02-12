const { create } = require('./user.create');
const { login } = require('./user.login');
const { getById } = require('./user.getById');

module.exports = function User() {
  return {
    create,
    login,
    getById,
  };
};
