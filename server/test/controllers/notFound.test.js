const request = require('supertest');

describe('GET /thisroutedoesntexist', () => {
  it('should return 404 not found', async () => {
    await request(TEST_BACKEND_APP)
      .get('/thisroutedoesntexist')
      .expect('Content-Type', /json/)
      .expect(404);
  });
});
