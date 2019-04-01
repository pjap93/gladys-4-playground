const db = require('../../models');
const { SESSION_TOKEN_TYPES } = require('../../utils/constants');
const { Error401 } = require('../../utils/httpErrors');
const { hashRefreshToken } = require('../../utils/refreshToken');
const { generateAccessToken } = require('../../utils/accessToken');

/**
 * @description Create and save in database a refresh_token
 * @param {string} refreshToken - The refresh token of the user.
 * @param {Array} scope - The scope to allow.
 * @returns {Promise} Resolving with the refreshToken.
 * @example
 * gladys.session.getAccessToken('xxxx');
 */
async function getAccessToken(refreshToken, scope) {
  const refreshTokenHash = hashRefreshToken(refreshToken);

  const session = await db.Session.findOne({
    where: {
      token_type: SESSION_TOKEN_TYPES.REFRESH_TOKEN,
      token_hash: refreshTokenHash,
    },
  });

  if (session === null) {
    throw new Error401(`Session not found`);
  }

  if (session.valid_until < new Date()) {
    throw new Error401(`Session has expired`);
  }

  const accessToken = generateAccessToken(session.user_id, scope, session.id, this.jwtSecret);

  return {
    access_token: accessToken,
  };
}

module.exports = {
  getAccessToken,
};
