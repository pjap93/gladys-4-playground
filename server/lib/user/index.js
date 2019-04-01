const { create } = require('./user.create');
const { login } = require('./user.login');
const { getById } = require('./user.getById');
const { getByTelegramUserId } = require('./user.getByTelegramUserId');
const { forgotPassword } = require('./user.forgotPassword');
const { updatePassword } = require('./user.updatePassword');

const User = function User(session) {
  this.session = session;
};

User.prototype.create = create;
User.prototype.login = login;
User.prototype.forgotPassword = forgotPassword;
User.prototype.getById = getById;
User.prototype.getByTelegramUserId = getByTelegramUserId;
User.prototype.updatePassword = updatePassword;

module.exports = User;
