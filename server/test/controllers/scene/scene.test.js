const { expect } = require('chai');
const { authenticatedRequest } = require('../request.test');
const { ACTIONS } = require('../../../utils/constants');

describe('POST /api/v1/scene', () => {
  it('should create scene', async () => {
    await authenticatedRequest
      .post('/api/v1/scene')
      .send({
        name: 'New Scene',
        actions: [{
          type: ACTIONS.HOUSE_ALARM.ARM,
        }],
      })
      .expect('Content-Type', /json/)
      .expect(201)
      .then((res) => {
        expect(res.body).to.have.property('name', 'New Scene');
        expect(res.body).to.have.property('selector', 'new-scene');
      });
  });
});

describe('GET /api/v1/scene', () => {
  it('should get scene', async () => {
    await authenticatedRequest
      .get('/api/v1/scene')
      .query({
        search: 'Test scene',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.deep.equal([{
          id: '3a30636c-b3f0-4251-a347-90787f0fe940',
          name: 'Test scene',
          selector: 'test-scene',
          last_executed: null,
          updated_at: '2019-02-12T07:49:07.556Z',
        }]);
      });
  });
  it('should return 0 scenes', async () => {
    await authenticatedRequest
      .get('/api/v1/scene')
      .query({
        search: 'UNKNOWN SCENE',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.deep.equal([]);
      });
  });
});

describe('PATCH /api/v1/scene/:scene_selector', () => {
  it('should update scene', async () => {
    await authenticatedRequest
      .patch('/api/v1/scene/test-scene')
      .send({
        name: 'New name',
      })
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.have.property('name', 'New name');
      });
  });
});

describe('DELETE /api/v1/scene/:scene_selector', () => {
  it('should delete scene', async () => {
    await authenticatedRequest
      .delete('/api/v1/scene/test-scene')
      .expect('Content-Type', /json/)
      .expect(200)
      .then((res) => {
        expect(res.body).to.deep.equal({
          success: true,
        });
      });
  });
});