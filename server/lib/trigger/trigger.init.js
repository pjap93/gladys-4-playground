const db = require('../../models');

/**
 * @description Load all 
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
}

module.exports = {
  init,
};
