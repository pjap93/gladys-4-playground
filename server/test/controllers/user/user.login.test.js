const request = require('supertest');
const { expect } = require('chai');

describe('POST /api/login', () => {
  it('should login user', async () => {
    await request(TEST_BACKEND_APP)
      .post('/api/login')
      .send({
        email: 'demo@demo.com',
        password: 'mysuperpassword',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('access_token');
        expect(res.body).to.have.property('refresh_token');
      });
  });
  it('should not login user (wrong password)', async () => {
    await request(TEST_BACKEND_APP)
      .post('/api/login')
      .send({
        email: 'usernotfound@demo.com',
        password: 'wrong',
      })
      .expect('Content-Type', /json/)
      .expect(403);
  });
  it('should not login user (email not found)', async () => {
    await request(TEST_BACKEND_APP)
      .post('/api/login')
      .send({
        email: 'demo@demo.com',
        password: 'wrong',
      })
      .expect('Content-Type', /json/)
      .expect(403);
  });
});
