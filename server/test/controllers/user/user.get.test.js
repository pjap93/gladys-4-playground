const { expect } = require('chai');
const { request, authenticatedRequest } = require('../request.test');

describe('GET /api/v1/user', () => {
  it('should return list of user with last location', async () => {
    await authenticatedRequest
      .get('/api/v1/user')
      .query({
        fields: 'id,firstname,lastname,last_latitude,last_longitude,last_location_changed',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.deep.equal([{
          id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
          firstname: 'John',
          lastname: 'Doe',
          last_latitude: null,
          last_longitude: null,
          last_location_changed: null,
        }]);
      });
  });
  it('should return 401 unauthorized', async () => {
    await request
      .get('/api/v1/user')
      .expect('Content-Type', /json/)
      .expect(401);
  });
});
