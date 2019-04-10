const { expect, assert } = require('chai');

const { Cache } = require('../../../utils/cache');
const Session = require('../../../lib/session');

describe('session.create', () => {
  it('should create a refresh token valid 60 seconds', async () => {
    const session = new Session('secret');
    const res = await session.create('0cd30aef-9c4e-4a23-88e3-3547971296e5', ['dashboard:read'], 60);
    expect(res).to.have.property('refresh_token');
    expect(res).to.have.property('access_token');
    expect(res).to.have.property('session_id');
  });
});

describe('session.getAccessToken', () => {
  it('should return a new access token', async () => {
    const session = new Session('secret');
    const res = await session.getAccessToken('refresh-token-test', ['dashboard:read']);
    expect(res).to.have.property('access_token');
  });
  it('should return error, expired refresh token', async () => {
    const session = new Session('secret');
    const promise = session.getAccessToken('refresh-token-test-expired', ['dashboard:read']);
    return assert.isRejected(promise, 'Session has expired');
  });
  it('should return error, session not found', async () => {
    const session = new Session('secret');
    const promise = session.getAccessToken('does-not-exist', ['dashboard:read']);
    return assert.isRejected(promise, 'Session not found');
  });
});

describe('session.revoke', () => {
  const cache = new Cache();
  it('should revoke a session', async () => {
    const session = new Session('secret', cache);
    const revokedSession = await session.revoke('0cd30aef-9c4e-4a23-88e3-3547971296e5', 'ada07710-5f25-4510-ac63-b002aca3bd32');
    expect(revokedSession).to.deep.equal({
      id: 'ada07710-5f25-4510-ac63-b002aca3bd32',
      revoked: true,
    });
  });
  it('should return not found', async () => {
    const session = new Session('secret', cache);
    const promise = session.revoke('0cd30aef-9c4e-4a23-88e3-3547971296e5', 'b85ebc3a-0e31-4218-b3fa-842b64322276');
    return assert.isRejected(promise, 'Session not found');
  });
});
