const { ACTIONS } = require('../../utils/constants');

const actionsFunc = {
  [ACTIONS.LIGHT.TURN_ON]: async (self, action, scope) => self.light.turnOn(action.deviceFeature),
};

module.exports = {
  actionsFunc,
};
