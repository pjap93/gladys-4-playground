const { actionsFunc } = require('./scene.actions');

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

module.exports = {
  executeAction,
  executeActions,
};
