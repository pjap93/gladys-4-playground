const { create } = require('./session.create');
const { getAccessToken } = require('./session.getAccessToken');
const { revoke } = require('./session.revoke');

const Session = function Session(jwtSecret, cache) {
  this.jwtSecret = jwtSecret;
  this.cache = cache;
};

Session.prototype.create = create;
Session.prototype.getAccessToken = getAccessToken;
Session.prototype.revoke = revoke;

module.exports = Session;
