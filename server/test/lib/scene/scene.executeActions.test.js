const { assert, fake } = require('sinon');
const chaiAssert = require('chai').assert;
const EventEmitter = require('events');
const { ACTIONS } = require('../../../utils/constants');
const { executeActions } = require('../../../lib/scene/scene.executeActions');

const StateManager = require('../../../lib/state');

const event = new EventEmitter();

describe('scene.executeActions', () => {
  it('should execute light turn on', async () => {
    const light = {
      turnOn: fake.resolves(null),
    };
    const stateManager = new StateManager(event);
    stateManager.setState('device', 'light-1', light);
    await executeActions({ stateManager }, [{
      type: ACTIONS.LIGHT.TURN_ON,
      device: 'light-1',
    }], {});
    assert.calledOnce(light.turnOn);
  });
  it('should execute wait 5 ms', async () => {
    await executeActions({}, [{
      type: ACTIONS.TIME.DELAY,
      milliseconds: 5,
    }], {});
    await executeActions({}, [{
      type: ACTIONS.TIME.DELAY,
      seconds: 5 / 1000,
    }], {});
    await executeActions({}, [{
      type: ACTIONS.TIME.DELAY,
      minutes: 5 / 1000 / 60,
    }], {});
    await executeActions({}, [{
      type: ACTIONS.TIME.DELAY,
      hours: 5 / 1000 / 60 / 60,
    }], {});
  });
  it('should execute sequential actions', async () => {
    const light = {
      turnOn: fake.resolves(null),
    };
    const stateManager = new StateManager(event);
    stateManager.setState('device', 'light-1', light);
    await executeActions({ stateManager }, [{
      type: ACTIONS.LIGHT.TURN_ON,
      device: 'light-1',
      then: [{
        type: ACTIONS.LIGHT.TURN_ON,
        device: 'light-1',
      }],
    }], {});
    assert.calledTwice(light.turnOn);
  });
  it('should throw error, action type does not exist', async () => {
    const light = {
      turnOn: fake.resolves(null),
    };
    const stateManager = new StateManager(event);
    stateManager.setState('device', 'light-1', light);
    const promise = executeActions({ stateManager }, [{
      type: 'THISDOESNOTEXIST',
      device: 'light-1',
    }], {});
    return chaiAssert.isRejected(promise, 'Action type "THISDOESNOTEXIST" does not exist.');
  });
});
