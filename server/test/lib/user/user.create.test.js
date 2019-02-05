const user = require('../../../lib/user');

describe('user.create', () => {
  it('should create user', async () => {
    await user.create({
      firstname: 'Tony',
      lastname: 'Stark',
      email: 'tony.stark@gladysassistant.com',
      password: 'testststs',
    });
  });
});
