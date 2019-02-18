const { expect } = require('chai');
const request = require('supertest');

describe('POST /user', () => {
  it('should create user', async () => {
    await request(TEST_BACKEND_APP)
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
});
