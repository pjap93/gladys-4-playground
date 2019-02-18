const { create } = require('./session.create');

const Session = function Session(jwtSecret) {
  this.jwtSecret = jwtSecret;
};

Session.prototype.create = create;

module.exports = Session;
