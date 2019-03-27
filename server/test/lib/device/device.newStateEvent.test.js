const EventEmitter = require('events');
const { assert } = require('chai');
const Device = require('../../../lib/device');
const StateManager = require('../../../lib/state');

const event = new EventEmitter();

describe('Device', () => {
  it('should save new sate', async () => {
    const stateManager = new StateManager(event);
    const device = new Device(event, {}, stateManager);
    const deviceFeature = {
      id: 'ca91dfdf-55b2-4cf8-a58b-99c0fbf6f5e4',
      selector: 'test-device-feature',
      has_feedback: false,
      keep_history: true,
    };
    await device.newStateEvent({ deviceFeature, state: 12 });
  });
  it('should not save new sate', async () => {
    const stateManager = new StateManager(event);
    const device = new Device(event, {}, stateManager);
    const deviceFeature = null;
    const promise = device.newStateEvent({ deviceFeature, state: 12 });
    return assert.isRejected(promise);
  });
});
