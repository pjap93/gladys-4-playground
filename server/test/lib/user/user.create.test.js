const { expect, assert } = require('chai');
const EventEmitter = require('events');
const User = require('../../../lib/user');
const StateManager = require('../../../lib/state');

const event = new EventEmitter();

const stateManager = new StateManager(event);

describe('user.create', () => {
  const user = new User({}, stateManager);
  it('should create user', async () => {
    const createdUser = await user.create({
      firstname: 'Tony',
      lastname: 'Stark',
      email: 'tony.stark@gladysassistant.com',
      password: 'testststs',
      birthdate: '01/01/2019',
      language: 'en',
      role: 'admin',
    });
    expect(createdUser).not.to.have.property('password');
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
