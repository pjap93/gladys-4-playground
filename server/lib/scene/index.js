const queue = require('queue');
const { addScene } = require('./scene.addScene');
const { create } = require('./scene.create');
const { execute } = require('./scene.execute');
const { executeSingleAction } = require('./scene.executeSingleAction');

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
SceneManager.prototype.execute = execute;
SceneManager.prototype.executeSingleAction = executeSingleAction;

module.exports = SceneManager;
