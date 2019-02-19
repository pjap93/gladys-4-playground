const { create } = require('./user.create');
const { login } = require('./user.login');
const { getById } = require('./user.getById');
const { getByTelegramUserId } = require('./user.getByTelegramUserId');

const User = function User() {};

User.prototype.create = create;
User.prototype.login = login;
User.prototype.getById = getById;
User.prototype.getByTelegramUserId = getByTelegramUserId;

module.exports = User;
