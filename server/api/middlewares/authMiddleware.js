const asyncMiddleware = require('./asyncMiddleware');
const { Error401 } = require('../../utils/httpErrors');
const logger = require('../../utils/logger');

module.exports = function AuthMiddleware(scope, gladys) {
  return asyncMiddleware(async (req, res, next) => {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new Error401('Missing Bearer header');
      }
      const token = authHeader.substring(7, authHeader.length);
      // we validate the token
      const userId = gladys.session.validateAccessToken(token, scope);
      // we get the user in DB
      req.user = await gladys.user.getById(userId);

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
