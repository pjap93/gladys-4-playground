const EventEmitter = require('events');
const { fake } = require('sinon');
const Device = require('../../../lib/device');

const StateManager = require('../../../lib/state');

const event = new EventEmitter();

const testService = {
  poll: fake.resolves(true),
};

describe('Device', () => {
  it('should setup poll', () => {
    const stateManager = new StateManager(event);
    const service = {
      getService: () => testService,
    };
    const device = new Device(event, {}, stateManager, service);
    device.setupPoll();
  });
});
