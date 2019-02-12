const jwt = require('jsonwebtoken');
const asyncMiddleware = require('./asyncMiddleware');
const { Error401 } = require('../../utils/httpErrors');
const logger = require('../../utils/logger');

module.exports = function AuthMiddleware(jwtSecret, scope, cache) {
  return asyncMiddleware(async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error401('Missing Bearer header');
      }
      const token = authHeader.substring(7, authHeader.length);
      /**
       * @type {Object} decoded
       */
      const decoded = jwt.verify(token, jwtSecret, {
        issuer: 'gladys',
        audience: 'user',
      });

      // we verify that the scope required to access this route is here
      if (decoded.scope.includes(scope) === false) {
        throw new Error401(`AuthMiddleware: Scope "${scope}" is not in list of authorized scope ${decoded.scope}`);
      }

      // we verify that the session is not revoked
      if (cache.get(`revoked_session:${decoded.session_id}`) === true) {
        throw new Error401('AuthMiddleware: Session was revoked');
      }

      req.user = {
        id: decoded.user_id,
      };

      next();
    } catch (e) {
      logger.trace(e);
      if (e instanceof Error401) {
        throw e;
      }
      throw new Error401();
    }
  });
};
