const Promise = require('bluebird');
const crypto = require('crypto');

const randomBytes = Promise.promisify(crypto.randomBytes);

const REFRESH_TOKEN_LENGTH = 500;

/**
 * @private
 * @description Generate a refresh token and its hash.
 * @example
 * const { refreshToken, refreshTokenhash } = await generateRefreshToken();
 * @returns {Promise} Resolving with refreshToken and refreshTokenHash.
 */
async function generateRefreshToken() {
  const refreshToken = (await randomBytes(Math.ceil(REFRESH_TOKEN_LENGTH / 2))).toString('hex').slice(0, REFRESH_TOKEN_LENGTH);
  const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex');

  return {
    refreshToken,
    refreshTokenHash,
  };
}

module.exports = {
  generateRefreshToken,
};
