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
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        res.body.should.have.property('id');
      });
  });
});
