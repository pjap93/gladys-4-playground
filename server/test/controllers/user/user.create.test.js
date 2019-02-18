const { expect } = require('chai');
const { request } = require('../request.test');

describe('POST /user', () => {
  it('should create user', async () => {
    await request
      .post('/api/user')
      .send({
        firstname: 'Tony',
        lastname: 'Stark',
        email: 'tony.stark@gladysassistant.com',
        password: 'testststs',
        birthdate: '01/01/2019',
        language: 'en',
        role: 'admin',
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).to.have.property('id');
      });
  });
  it('should not create user, missing email', async () => {
    await request
      .post('/api/user')
      .send({
        firstname: 'Tony',
        lastname: 'Stark',
        password: 'testststs',
        birthdate: '01/01/2019',
        language: 'en',
        role: 'admin',
      })
      .expect('Content-Type', /json/)
      .expect(422);
  });
  it('should not create user, duplicate email', async () => {
    await request
      .post('/api/user')
      .send({
        firstname: 'Tony',
        lastname: 'Stark',
        password: 'testststs',
        email: 'demo@demo.com',
        birthdate: '01/01/2019',
        language: 'en',
        role: 'admin',
      })
      .expect('Content-Type', /json/)
      .expect(409);
  });
});
