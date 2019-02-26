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
  SCHEDULED_SCENE: {
    ENABLED: 'scheduled-scene.enabled',
    DISABLED: 'scheduled-scene.disabled',
    TRIGGERED: 'scheduled-scene.triggered',
  },
};

const STATES = {
  USER_SLEEP: {
    ASLEEP: 'asleep',
    NEED_TO_WAKE_UP: 'need-to-wake-up',
    AWAKE: 'awake',
    NEED_TO_SLEEP: 'need-to-sleep',
  },
  USER_PRESENCE: {
    AT_HOME: 'at-home',
    OUT: 'out',
  },
  USER_WORK: {
    NOT_AT_WORK: 'not-at-work',
    NEED_TO_GO_TO_WORK: 'need-to-go-to-work',
    AT_WORK: 'at-work',
    NEED_TO_LEAVE_WORK: 'need-to-leave-work',
  },
  HOUSE_ALARM: {
    DISARMED: 'disarmed',
    TRYING_TO_ARM: 'trying-to-arm',
    ARMED: 'armed',
    TRYING_TO_DISARM: 'trying-to-disarm',
    TRIGGERED: 'triggered',
  },
};

// build event list from object
const EVENT_LIST = [];
Object.keys(EVENTS).forEach((key) => {
  Object.keys(EVENTS[key]).forEach((secondKey) => {
    EVENT_LIST.push(EVENTS[key][secondKey]);
  });
});

module.exports.STATE = STATE;
module.exports.EVENTS = EVENTS;
module.exports.EVENT_LIST = EVENT_LIST;
