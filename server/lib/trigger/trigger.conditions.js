const { STATES, CONDITIONS } = require('../../utils/constants');

const conditions = {
  [CONDITIONS.HOUSE_ALARM.IS_ARMED]: (stateManager, event, condition) => (stateManager.get('house', condition.house, 'alarm') === STATES.HOUSE_ALARM.ARMED),
  [CONDITIONS.HOUSE_ALARM.IS_DISARMED]: (stateManager, event, condition) => (stateManager.get('house', condition.house, 'alarm') === STATES.HOUSE_ALARM.DISARMED),
};

module.exports = {
  conditions,
};
