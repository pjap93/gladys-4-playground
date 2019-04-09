const { ACTIONS } = require('../../utils/constants');

const actionsFunc = {
  [ACTIONS.LIGHT.TURN_ON]: async (self, action, scope) => {
    const light = self.stateManager.get('device', action.device);
    return light.turnOn();
  },
  [ACTIONS.TIME.DELAY]: async (self, action, scope) => new Promise((resolve) => {
    if (action.milliseconds) {
      setTimeout(resolve, action.milliseconds);
    } else if (action.seconds) {
      setTimeout(resolve, action.seconds * 1000);
    } else if (action.minutes) {
      setTimeout(resolve, action.minutes * 1000 * 60);
    } else if (action.hours) {
      setTimeout(resolve, action.hours * 1000 * 60 * 60);
    }
  }),
  [ACTIONS.SERVICE.START]: async (self, action, scope) => self.stateManager.get('service', action.service).start(),
  [ACTIONS.SERVICE.STOP]: async (self, action, scope) => self.stateManager.get('service', action.service).stop(),
  [ACTIONS.SCENE.START]: async (self, action, scope) => self.execute(action.scene, scope),
};

module.exports = {
  actionsFunc,
};
