const { create } = require('./session.create');

module.exports = function Session(jwtSecret) {
  return {
    // unfortunately, when using .bind(), VScode lose the autocompletion, so for developing purpose we'll do it that way
    create: (userId, scope, validityInSeconds) => create(jwtSecret, userId, scope, validityInSeconds),
  };
};
