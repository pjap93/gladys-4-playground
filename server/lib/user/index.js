const { create } = require('./user.create');

module.exports = function User() {
  return {
    create,
  };
};
