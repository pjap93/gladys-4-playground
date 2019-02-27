const STATE = {
  ON: 1,
  OFF: 0,
};

const EVENTS = {
  USER_SLEEP: {
    TIME_TO_WAKE_UP: 'user.time-to-wake-up',
    CANCELED_WAKE_UP: 'user.canceled-wake-up',
    WOKE_UP: 'user.woke-up',
    FELL_ASLEEP: 'user.fell-asleep',
    CANCELED_SLEEP: 'user.canceled_sleep',
    TIME_TO_SLEEP: 'user.time-to-sleep',
  },
  USER_PRESENCE: {
    LEFT_HOME: 'user.left-home',
    BACK_HOME: 'user.back-home',
  },
  USER_WORK: {
    TIME_TO_GO_TO_WORK: 'user.time-to-go-to-work',
    CANCELED_GOING_TO_WORK: 'user.canceled-going-to-work',
    ARRIVED_AT_WORK: 'user.arrived-at-work',
    TIME_TO_LEAVE_WORK: 'user.time-to-leave-work',
    CANCELED_LEAVING_WORK: 'user.canceled-leaving-work',
  },
  HOUSE_ALARM: {
    ATTEMPTED_TO_ARM: 'house.attempted-to-arm',
    ARMED: 'house.armed',
    FAILED_TO_ARM: 'house.failed-to-arm',
    ATTEMPTED_TO_DISARM: 'house.attempted-to-disarm',
    FAILED_TO_DISARM: 'house.failed-to-disarm',
    TRIGGERED: 'house.triggered',
    TRIGGERED_STOPPED: 'house.triggered-stopped',
    DISARMED: 'house.disarmed',
  },
  SUN: {
    SUNSET: 'sun.sunset',
    SUNRISE: 'sun.sunrise',
  },
  SCENE: {
    TRIGGERED: 'scene.triggered',
    SUCCEEDED: 'scene.succeeded',
    FAILED: 'scene.failed',
  },
  LIGHT: {
    TURNED_ON: 'light.turned-on',
    TURNED_OFF: 'light.turned-off',
    BRIGHTNESS_CHANGED: 'light.brightness-changed',
    HUE_CHANGED: 'light.hue-changed',
    SATURATION_CHANGED: 'light.saturation-changed',
  },
  TEMPERATURE_SENSOR: {
    TEMPERATURE_CHANGED: 'temperature.changed',
  },
  SCHEDULED_SCENE: {
    ENABLED: 'scheduled-scene.enabled',
    DISABLED: 'scheduled-scene.disabled',
    TRIGGERED: 'scheduled-scene.triggered',
  },
};

const STATES = {
  USER_SLEEP: {
    ASLEEP: 'user.asleep',
    NEED_TO_WAKE_UP: 'user.need-to-wake-up',
    AWAKE: 'user.awake',
    NEED_TO_SLEEP: 'user.need-to-sleep',
  },
  USER_PRESENCE: {
    AT_HOME: 'user.at-home',
    OUT: 'user.out',
  },
  USER_WORK: {
    NOT_AT_WORK: 'user.not-at-work',
    NEED_TO_GO_TO_WORK: 'user.need-to-go-to-work',
    AT_WORK: 'user.at-work',
    NEED_TO_LEAVE_WORK: 'user.need-to-leave-work',
  },
  HOUSE_ALARM: {
    DISARMED: 'house.alarm.disarmed',
    TRYING_TO_ARM: 'house.alarm.trying-to-arm',
    ARMED: 'house.alarm.armed',
    TRYING_TO_DISARM: 'house.alarm.trying-to-disarm',
    TRIGGERED: 'house.alarm.triggered',
  },
};

const CONDITIONS = {
  USER_SLEEP: {
    IS_ASLEEP: 'user.is-asleep',
    IS_AWAKE: 'user.is-awake',
    NEED_TO_WAKE_UP: 'user.need-to-wake-up',
    NEEED_TO_SLEEP: 'user.need-to-sleep',
  },
  USER_PRESENCE: {
    IS_AT_HOME: 'user.is-at-home',
    IS_OUT: 'user.is-out',
  },
  USER_WORK: {
    IS_NOT_AT_WORK: 'user.is-not-at-work',
    NEED_TO_GO_TO_WORK: 'user.need-to-go-to-work',
    IS_AT_WORK: 'user.is-at-work',
    NEED_TO_LEAVE_WORK: 'user.need-to-leave-work',
  },
  HOUSE_ALARM: {
    IS_DISARMED: 'house.alarm.is-disarmed',
    IS_TRYING_TO_ARM: 'house.alarm.is-trying-to-arm',
    IS_ARMED: 'house.alarm.is-armed',
    IS_TRYING_TO_DISARM: 'house.alarm.is-trying-to-disarm',
    IS_TRIGGERED: 'house.alarm.is-triggered',
  },
};

const ACTIONS = {
  LIGHT: {
    TURN_ON: 'light.turn-on',
    TURN_OFF: 'light.turn-off',
    CHANGE_BRIGHTNESS: 'light.change-brightness',
    CHANGE_HUE: 'light.change-hue',
    CHANGE_SATURATION: 'light.change-saturation',
  },
  HOUSE_ALARM: {
    ARM: 'house.alarm.arm',
    DISARM: 'house.alarm.disarm',
    TRIGGER: 'house.alarm.trigger',
  },
  USER_PRESENCE: {
    SET_AWAY: 'user.event.set-away',
    SET_AT_HOME: 'user.event.set-at-home',
  },
  TIME: {
    DELAY: 'delay',
  },
};

const INTENTS = {
  LIGHT: {
    TURN_ON: 'intent.light.turn-on',
  },
};

const DEVICE_FEATURE_CATEGORIES = {
  LIGHT: 'light',
};

const DEVICE_FEATURE_TYPES = {
  LIGHT: {
    BINARY: 'binary',
    BRIGHTNESS: 'brightness',
    HUE: 'hue',
    SATURATION: 'saturation',
  },
};

const createList = (obj) => {
  const list = [];
  Object.keys(obj).forEach((key) => {
    Object.keys(obj[key]).forEach((secondKey) => {
      list.push(obj[key][secondKey]);
    });
  });
  return list;
};

// build lists from object
const EVENT_LIST = createList(EVENTS);
const ACTION_LIST = createList(ACTIONS);
const CONDITION_LIST = createList(CONDITIONS);

module.exports.STATE = STATE;
module.exports.EVENTS = EVENTS;
module.exports.STATES = STATES;
module.exports.CONDITIONS = CONDITIONS;
module.exports.ACTIONS = ACTIONS;
module.exports.INTENTS = INTENTS;
module.exports.DEVICE_FEATURE_CATEGORIES = DEVICE_FEATURE_CATEGORIES;
module.exports.DEVICE_FEATURE_TYPES = DEVICE_FEATURE_TYPES;

module.exports.EVENT_LIST = EVENT_LIST;
module.exports.ACTION_LIST = ACTION_LIST;
module.exports.CONDITION_LIST = CONDITION_LIST;
