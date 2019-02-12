const { create } = require('./session.create');
const { generateJwtSecret } = require('../../utils/jwtSecret');

module.exports = function Session() {
  // generate a jwtSecret, in a synchronous way as we are starting the server.
  const { jwtSecret } = generateJwtSecret();

  return {
    // unfortunately, when using .bind(), VScode lose the autocompletion, so for developing purpose we'll do it that way
    create: (userId, scope, validityInSeconds) => create(jwtSecret, userId, scope, validityInSeconds),
  };
};
