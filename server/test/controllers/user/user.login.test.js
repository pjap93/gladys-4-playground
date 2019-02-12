const request = require('supertest');

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
        res.body.should.have.property('access_token');
        res.body.should.have.property('refresh_token');
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
