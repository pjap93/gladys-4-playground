const EventEmitter = require('events');
const { expect } = require('chai');
const Device = require('../../../../lib/device');
const StateManager = require('../../../../lib/state');

const RANDOM_IMAGE = 'image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z/C/HgAGgwJ/lK3Q6wAAAABJRU5ErkJggg==';

const event = new EventEmitter();

describe('Camera.setImage', () => {
  it('should set image', async () => {
    const stateManager = new StateManager(event);
    const deviceManager = new Device(event, {}, stateManager, {});
    stateManager.setState('deviceFeature', 'test-camera', {
      id: '565d05fc-1736-4b76-99ca-581232901d96',
      selector: 'test-camera',
    });
    await deviceManager.cameraManager.setImage('test-camera', RANDOM_IMAGE);
    const newDeviceFeature = stateManager.get('deviceFeature', 'test-camera');
    expect(newDeviceFeature).to.have.property('last_value_string', RANDOM_IMAGE);
  });
});
