const { generateJwtSecret } = require('../../utils/jwtSecret');

describe('generateJwtSecret', () => {
  it('should generate a jwtSecret with the right length', async () => {
    const jwtSecret = generateJwtSecret();
    jwtSecret.length.should.equal(500);
  });
});
