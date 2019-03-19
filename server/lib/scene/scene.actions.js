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
};

module.exports = {
  actionsFunc,
};
