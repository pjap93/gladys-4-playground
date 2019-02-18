const { create } = require('./user.create');
const { login } = require('./user.login');
const { getById } = require('./user.getById');

const User = function User() {};

User.prototype.create = create;
User.prototype.login = login;
User.prototype.getById = getById;

module.exports = User;
