const User = require('../../../lib/user');

describe('user.create', () => {
  it('should create user', async () => {
    const user = User();
    await user.create({
      firstname: 'Tony',
      lastname: 'Stark',
      email: 'tony.stark@gladysassistant.com',
      password: 'testststs',
      birthdate: '01/01/2019',
      language: 'en',
      role: 'admin',
    });
  });
  it('should not create user, wrong email', async () => {
    const user = User();
    return user.create({
      firstname: 'Tony',
      lastname: 'Stark',
      email: 'thisisnotemail',
      password: 'testststs',
      birthdate: '01/01/2019',
      language: 'en',
      role: 'admin',
    }).should.be.rejected();
  });
  it('should not create user, password too small', () => {
    const user = User();
    return user.create({
      firstname: 'Tony',
      lastname: 'Stark',
      email: 'tony.stark@gladysassistant.com',
      password: 'low',
      birthdate: '01/01/2019',
      language: 'en',
      role: 'admin',
    }).should.be.rejected();
  });
});
