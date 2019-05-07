const { expect } = require('chai');
const EventEmitter = require('events');
const Device = require('../../../lib/device');
const StateManager = require('../../../lib/state');

const event = new EventEmitter();

describe('Device', () => {
  it('should create device alone', async () => {
    const stateManager = new StateManager(event);
    const device = new Device(event, {}, stateManager);
    const newDevice = await device.create({
      service_id: 'a810b8db-6d04-4697-bed3-c4b72c996279',
      name: 'Philips Hue 1',
      external_id: 'philips-hue-new',
    });
    expect(newDevice).to.have.property('name', 'Philips Hue 1');
    expect(newDevice).to.have.property('selector', 'philips-hue-1');
    expect(newDevice).to.have.property('features');
    expect(newDevice).to.have.property('params');
  });
  it('should create device, one feature and one param', async () => {
    const stateManager = new StateManager(event);
    const device = new Device(event, {}, stateManager);
    const newDevice = await device.create({
      service_id: 'a810b8db-6d04-4697-bed3-c4b72c996279',
      name: 'Philips Hue 1',
      external_id: 'philips-hue:1',
      features: [{
        name: 'On/Off',
        external_id: 'philips-hue:1:binary',
        category: 'light',
        type: 'binary',
        read_only: false,
        keep_history: true,
        has_feedback: false,
        min: 0,
        max: 1,
      }],
      params: [{ name: 'IP_ADDRESS', value: '192.168.1.1' }],
    });
    expect(newDevice).to.have.property('name', 'Philips Hue 1');
    expect(newDevice).to.have.property('selector', 'philips-hue-1');
    expect(newDevice).to.have.property('features');
    expect(newDevice).to.have.property('params');
  });
});
