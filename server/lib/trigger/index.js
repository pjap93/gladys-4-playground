const { init } = require('./trigger.init');
const { addToListeners } = require('./trigger.addToListeners');
const { handleEvent } = require('./trigger.handleEvent');

const TriggerManager = function Trigger(event, stateManager, scene) {
  this.event = event;
  this.stateManager = stateManager;
  this.scene = scene;
  this.triggerDictionnary = {};
};

TriggerManager.prototype.init = init;
TriggerManager.prototype.addToListeners = addToListeners;
TriggerManager.prototype.handleEvent = handleEvent;

module.exports = TriggerManager;
