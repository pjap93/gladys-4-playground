const { create } = require('./session.create');
const { getAccessToken } = require('./session.getAccessToken');

const Session = function Session(jwtSecret) {
  this.jwtSecret = jwtSecret;
};

Session.prototype.create = create;
Session.prototype.getAccessToken = getAccessToken;

module.exports = Session;
