const { executeActions } = require('./scene.executeActions');

/**
 * @description Execute a scene by its selector.
 * @param {string} sceneSelector - The selector of the scene to execute.
 * @param {Object} [scope] - The scope of the event triggering the scene.
 * @example
 * sceneManager.execute('test');
 */
async function execute(sceneSelector, scope) {
  if (!this.scenes[sceneSelector]) {
    throw new Error(`Scene with selector ${sceneSelector} not found.`);
  }
  this.queue.push(() => executeActions(this, this.scenes[sceneSelector].actions, scope));
  return null;
}

module.exports = {
  execute,
};
