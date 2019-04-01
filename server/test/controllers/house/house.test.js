const { expect } = require('chai');
const { authenticatedRequest } = require('../request.test');

describe('POST /api/v1/house', () => {
  it('should create house', async () => {
    await authenticatedRequest
      .post('/api/v1/house')
      .send({
        name: 'my house',
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).to.have.property('name', 'my house');
        expect(res.body).to.have.property('selector', 'my-house');
      });
  });
});

describe('GET /api/v1/house', () => {
  it('should return list of houses', async () => {
    await authenticatedRequest
      .get('/api/v1/house')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.deep.equal([{
          id: 'a741dfa6-24de-4b46-afc7-370772f068d5',
          name: 'Test house',
          selector: 'test-house',
          latitude: null,
          longitude: null,
          created_at: '2019-02-12T07:49:07.556Z',
          updated_at: '2019-02-12T07:49:07.556Z',
        }]);
      });
  });
});

describe('PATCH /api/v1/house/test-house', () => {
  it('should update a house', async () => {
    await authenticatedRequest
      .patch('/api/v1/house/test-house')
      .send({
        name: 'NEW NAME',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('name', 'NEW NAME');
      });
  });
});


describe('DELETE /api/v1/house/test-house', () => {
  it('should delete a house', async () => {
    await authenticatedRequest
      .delete('/api/v1/house/test-house')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('success', true);
      });
  });
});
