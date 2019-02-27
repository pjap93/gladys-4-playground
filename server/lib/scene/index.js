const queue = require('queue');
const { actionsFunc } = require('./scene.actions');
const logger = require('../../utils/logger');

const SceneManager = function SceneManager(light) {
  this.light = light;
  this.scenes = {};
  // @ts-ignore
  this.queue = queue({
    autostart: true,
    concurrency: 1,
  });
};

let executeActions;

/**
 * @description Execute one action.
 * @param {Object} self - Reference to the SceneManager.
 * @param {Object} action - An Action from the db.
 * @param {Object} scope - The scope passed to all actions.
 * @returns {Promise} Resolve if the action was executed with success.
 * @example
 * executeAction(this, action, {});
 */
async function executeAction(self, action, scope) {
  if (!actionsFunc[action.type]) {
    throw new Error(`Action type "${action.type}" does not exist.`);
  }
  // logger.debug(`Executing action ${action.type}`);
  // execute action
  await actionsFunc[action.type](self, action, scope);

  // if action has an sequential action
  if (action.then) {
    await executeActions(self, action.then, scope);
  }

  return null;
}

executeActions = async function executeActionsFunc(self, actions, scope) {
  const promises = [];
  actions.forEach(action => promises.push(executeAction(self, action, scope)));
  await Promise.all(promises);
  return null;
};

SceneManager.prototype.addScene = async function addScene(scene) {
  this.scenes[scene.selector] = scene;
};

SceneManager.prototype.execute = async function execute(sceneSelector, scope) {
  if (!this.scenes[sceneSelector]) {
    throw new Error(`Scene with selector ${sceneSelector} not found.`);
  }
  this.queue.push(() => executeActions(this, this.scenes[sceneSelector].actions, scope));
};

module.exports = SceneManager;
