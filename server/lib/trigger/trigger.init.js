const db = require('../../models');

/**
 * @description Load all triggers from the database to the trigger store.
 * @returns {Promise} Resolve when success.
 * @example
 * trigger.init();
 */
async function init() {
  const triggers = await db.Trigger.find({
    where: {
      active: true,
    },
    include: [{
      model: db.Scene,
      as: 'scenes',
    }],
    raw: true,
  });
  triggers.forEach(trigger => this.addToListeners(trigger));
  return null;
}

module.exports = {
  init,
};
