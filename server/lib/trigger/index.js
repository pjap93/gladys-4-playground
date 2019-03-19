const { init } = require('./trigger.init');
const { addToListeners } = require('./trigger.addToListeners');
const { create } = require('./trigger.create');
const { handleEvent } = require('./trigger.handleEvent');
const { EVENTS } = require('../../utils/constants');

const TriggerManager = function Trigger(event, stateManager, scene) {
  this.event = event;
  this.stateManager = stateManager;
  this.scene = scene;
  this.triggerDictionnary = {};
  this.event.on(EVENTS.ACTION.TRIGGERED, action => this.scene.executeSingleAction(action));
};

TriggerManager.prototype.addToListeners = addToListeners;
TriggerManager.prototype.create = create;
TriggerManager.prototype.init = init;
TriggerManager.prototype.handleEvent = handleEvent;

module.exports = TriggerManager;
