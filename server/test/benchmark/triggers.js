const EventEmitter = require('events');
const TriggerManager = require('../../lib/trigger');
const StateManager = require('../../lib/state');
const { EVENT_LIST, CONDITIONS, STATES } = require('../../utils/constants');

const event = new EventEmitter();
const stateManager = new StateManager();
const triggerManager = new TriggerManager(event, stateManager);

const NUMBER_OF_LISTENERS = 300;
const NUMBER_OF_CONDITIONS_PER_TRIGGER = 5;
const NUMBER_OF_HOUSE_STATES = 20;
const NUMBER_OF_EVENTS_TO_THROW = 1000000;

const EVENTS_TO_THROW = [];

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min;

for (let a = 0; a < NUMBER_OF_EVENTS_TO_THROW; a += 1) {
  const oneEvent = EVENT_LIST[getRandomInt(0, EVENT_LIST.length)];
  EVENTS_TO_THROW.push(oneEvent);
}

for (let b = 0; b < NUMBER_OF_HOUSE_STATES; b += 1) {
  // init stateManager
  stateManager.setState('house', b, {
    alarm: (getRandomInt(0, 1) === 1) ? STATES.HOUSE_ALARM.ARMED : STATES.HOUSE_ALARM.DISARMED,
  });
}

for (let i = 0; i < NUMBER_OF_LISTENERS; i += 1) {
  const listener = {
    id: i,
    type: EVENT_LIST[getRandomInt(0, EVENT_LIST.length)],
    conditions: [],
    scenes: [],
  };
  for (let j = 0; j < NUMBER_OF_CONDITIONS_PER_TRIGGER; j += 1) {
    listener.conditions.push({
      type: (getRandomInt(0, 1) === 1) ? CONDITIONS.HOUSE_ALARM.IS_ARMED : CONDITIONS.HOUSE_ALARM.IS_DISARMED,
      house: j,
    });
  }
  triggerManager.addToListeners(listener);
}

console.time('Benchmark');

EVENTS_TO_THROW.forEach((item) => {
  triggerManager.handleEvent(item, {});
});

console.timeEnd('Benchmark');
