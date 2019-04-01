const { expect } = require('chai');
const { authenticatedRequest } = require('../request.test');

describe('POST /api/v1/session/:session_id/revoke', () => {
  it('should revoke session', async () => {
    await authenticatedRequest
      .post('/api/v1/session/ada07710-5f25-4510-ac63-b002aca3bd32/revoke')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('id', 'ada07710-5f25-4510-ac63-b002aca3bd32');
      });
  });
  it('should return 404 not found', async () => {
    await authenticatedRequest
      .post('/api/v1/session/ec595260-c538-4092-b76f-fde9f8a3b1c0/revoke')
      .expect('Content-Type', /json/)
      .expect(404)
      .then((res) => {
        expect(res.body).to.deep.equal({
          status: 404,
          code: 'NOT_FOUND',
          message: 'Session not found',
        });
      });
  });
});
