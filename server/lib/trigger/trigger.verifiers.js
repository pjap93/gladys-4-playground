const { EVENTS } = require('../../utils/constants');

const verifiers = {
  [EVENTS.USER.ARRIVED_AT_WORK]: (trigger, event) => true,
  [EVENTS.USER.BACK_HOME]: (trigger, event) => true,
  [EVENTS.USER.CANCELED_GOING_TO_WORK]: (trigger, event) => true,
  [EVENTS.SUN.SUNRISE]: (trigger, event) => true,
  [EVENTS.SUN.SUNSET]: (trigger, event) => true,
};

module.exports = {
  verifiers,
};
