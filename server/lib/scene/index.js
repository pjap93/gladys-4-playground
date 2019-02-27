const queue = require('queue');
const { addScene } = require('./scene.addScene');
const { create } = require('./scene.create');
const { execute } = require('./scene.execute');

const SceneManager = function SceneManager(light) {
  this.light = light;
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

module.exports = SceneManager;
