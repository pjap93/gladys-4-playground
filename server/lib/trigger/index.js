const { init } = require('./trigger.init');
const { addToListeners } = require('./trigger.addToListeners');
const { create } = require('./trigger.create');
const { handleEvent } = require('./trigger.handleEvent');

const TriggerManager = function Trigger(event, stateManager, scene) {
  this.event = event;
  this.stateManager = stateManager;
  this.scene = scene;
  this.triggerDictionnary = {};
};

TriggerManager.prototype.addToListeners = addToListeners;
TriggerManager.prototype.create = create;
TriggerManager.prototype.init = init;
TriggerManager.prototype.handleEvent = handleEvent;

module.exports = TriggerManager;
