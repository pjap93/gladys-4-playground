const { assert } = require('chai');

const User = require('../../../lib/user');

describe('user.create', () => {
  const user = new User();
  it('should create user', async () => {
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
    const promise = user.create({
      firstname: 'Tony',
      lastname: 'Stark',
      email: 'thisisnotemail',
      password: 'testststs',
      birthdate: '01/01/2019',
      language: 'en',
      role: 'admin',
    });
    return assert.isRejected(promise, 'Validation error: Validation isEmail on email failed');
  });
  it('should not create user, password too small', () => {
    const promise = user.create({
      firstname: 'Tony',
      lastname: 'Stark',
      email: 'tony.stark@gladysassistant.com',
      password: 'low',
      birthdate: '01/01/2019',
      language: 'en',
      role: 'admin',
    });
    return assert.isRejected(promise, 'Validation error: Validation len on password failed');
  });
});
