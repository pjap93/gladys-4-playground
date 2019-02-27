const { assert, fake } = require('sinon');
const { ACTIONS } = require('../../../utils/constants');
const { executeActions } = require('../../../lib/scene/scene.executeActions');

const light = {
  turnOn: fake.resolves(null),
};

describe('scene.executeActions', () => {
  it('should execute light turn on', async () => {
    await executeActions({ light }, [{
      type: ACTIONS.LIGHT.TURN_ON,
      deviceFeature: 'light-1',
    }], {});
    assert.calledWith(light.turnOn, 'light-1');
  });
});
