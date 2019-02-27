const { assert, fake } = require('sinon');
const { ACTIONS } = require('../../../utils/constants');
const SceneManager = require('../../../lib/scene');

const light = {
  turnOn: fake.resolves(null),
};

describe('SceneManager', () => {
  it('should execute one scene', async () => {
    const sceneManager = new SceneManager(light);
    const scene = {
      selector: 'my-scene',
      actions: [{
        type: ACTIONS.LIGHT.TURN_ON,
        deviceFeature: 'light-1',
      }],
    };
    sceneManager.addScene(scene);
    await sceneManager.execute('my-scene');
    return new Promise(((resolve) => {
      sceneManager.queue.start(() => {
        assert.calledWith(light.turnOn, 'light-1');
        resolve();
      });
    }));
  });
});
