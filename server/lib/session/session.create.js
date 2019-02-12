const db = require('../../models');
const { generateRefreshToken } = require('../../utils/refreshToken');
const { generateAccessToken } = require('../../utils/accessToken');

/**
 * @description Create and save in database a refresh_token
 * @param {string} jwtSecret - The secret to generate the jsonwebtoken.
 * @param {string} userId - The uuid of a user.
 * @param {Array} scope - Scope the refresh token is able to access.
 * @param {number} validityInSeconds - Validity of the refreshToken.
 * @returns {Promise} Resolving with the refreshToken.
 * @example
 * gladys.refreshToken.create('7144a75d-1ec2-4f31-a587-a4b316c28754');
 */
async function create(jwtSecret, userId, scope, validityInSeconds) {
  const { refreshToken, refreshTokenHash } = await generateRefreshToken();

  const newSession = {
    user_id: userId,
    token_type: 'refresh_token',
    token_hash: refreshTokenHash,
    scope: scope.join(','),
    valid_until: new Date(Date.now() + (validityInSeconds * 1000)),
  };

  const session = await db.Session.create(newSession);
  const accessToken = generateAccessToken(userId, scope, session.id, jwtSecret);

  return {
    refresh_token: refreshToken,
    access_token: accessToken,
  };
}

module.exports = {
  create,
};