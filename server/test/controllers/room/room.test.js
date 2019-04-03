const { expect } = require('chai');
const { authenticatedRequest } = require('../request.test');

describe('POST /api/v1/house/:house_selector/room', () => {
  it('should create room', async () => {
    await authenticatedRequest
      .post('/api/v1/house/test-house/room')
      .send({
        name: 'my room',
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).to.have.property('name', 'my room');
        expect(res.body).to.have.property('selector', 'my-room');
      });
  });
});

describe('PATCH /api/v1/room/:room_selector', () => {
  it('should update a room', async () => {
    await authenticatedRequest
      .patch('/api/v1/room/test-room')
      .send({
        name: 'new name',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('name', 'new name');
        expect(res.body).to.have.property('selector', 'test-room');
      });
  });
});

describe('DELETE /api/v1/room/:room_selector', () => {
  it('should delete a room', async () => {
    await authenticatedRequest
      .delete('/api/v1/room/test-room')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('success', true);
      });
  });
});
