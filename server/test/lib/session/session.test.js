const { expect } = require('chai');

const Session = require('../../../lib/session');

describe('session.create', () => {
  it('should create a refresh token valid 60 seconds', async () => {
    const session = Session('secret');
    const res = await session.create('0cd30aef-9c4e-4a23-88e3-3547971296e5', ['dashboard:read'], 60);
    expect(res).to.have.property('refresh_token');
    expect(res).to.have.property('access_token');
  });
});
