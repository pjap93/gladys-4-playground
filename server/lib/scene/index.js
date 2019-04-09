const queue = require('queue');
const { addScene } = require('./scene.addScene');
const { create } = require('./scene.create');
const { execute } = require('./scene.execute');
const { get } = require('./scene.get');
const { executeSingleAction } = require('./scene.executeSingleAction');
const { update } = require('./scene.update');

const SceneManager = function SceneManager(stateManager) {
  this.stateManager = stateManager;
  this.scenes = {};
  // @ts-ignore
  this.queue = queue({
    autostart: true,
    concurrency: 1,
  });
};

SceneManager.prototype.addScene = addScene;
SceneManager.prototype.create = create;
SceneManager.prototype.get = get;
SceneManager.prototype.execute = execute;
SceneManager.prototype.executeSingleAction = executeSingleAction;
SceneManager.prototype.update = update;

module.exports = SceneManager;
