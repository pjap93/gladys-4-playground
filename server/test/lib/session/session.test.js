const { expect, assert } = require('chai');

const Session = require('../../../lib/session');

describe('session.create', () => {
  it('should create a refresh token valid 60 seconds', async () => {
    const session = new Session('secret');
    const res = await session.create('0cd30aef-9c4e-4a23-88e3-3547971296e5', ['dashboard:read'], 60);
    expect(res).to.have.property('refresh_token');
    expect(res).to.have.property('access_token');
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
