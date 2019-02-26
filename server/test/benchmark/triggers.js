const EventEmitter = require('events');
const TriggerManager = require('../../lib/trigger');
const { EVENT_LIST } = require('../../utils/constants');

const event = new EventEmitter();
const triggerManager = new TriggerManager(event, {});

const NUMBER_OF_LISTENERS = 300;
const NUMBER_OF_EVENTS_TO_THROW = 1000000;

const EVENTS_TO_THROW = [];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

for (let a = 0; a < NUMBER_OF_EVENTS_TO_THROW; a += 1) {
  const oneEvent = EVENT_LIST[getRandomInt(0, EVENT_LIST.length)];
  EVENTS_TO_THROW.push(oneEvent);
}

for (let i = 0; i < NUMBER_OF_LISTENERS; i += 1) {
  triggerManager.addToListeners({
    id: i,
    type: EVENT_LIST[getRandomInt(0, EVENT_LIST.length)],
    scenes: [],
  });
}

console.time('Benchmark');

EVENTS_TO_THROW.forEach((item) => {
  triggerManager.handleEvent(item, {});
});

console.timeEnd('Benchmark');
