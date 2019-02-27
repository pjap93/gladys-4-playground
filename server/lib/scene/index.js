const queue = require('queue');
const { addScene } = require('./scene.addScene');
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
SceneManager.prototype.execute = execute;

module.exports = SceneManager;
