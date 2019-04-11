const Promise = require('bluebird');
const { actionsFunc } = require('./scene.actions');

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
  // execute action
  await actionsFunc[action.type](self, action, scope);

  return null;
}

/**
 * @description Execute an array of array of action.
 * @param {Object} self - Reference to the SceneManager.
 * @param {Object} actions - An array of array of actions from the db.
 * @param {Object} scope - The scope passed to all actions.
 * @returns {Promise} Resolve if the action was executed with success.
 * @example
 * executeActions(this, actions, {});
 */
async function executeActions(self, actions, scope) {
  // first array level should be executed in serie
  await Promise.mapSeries(actions, async (parallelActions) => {
    // then, second level is executed in parallel
    await Promise.map(parallelActions, async (action) => {
      await executeAction(self, action, scope);
    });
  });
  return null;
}

module.exports = {
  executeAction,
  executeActions,
};
