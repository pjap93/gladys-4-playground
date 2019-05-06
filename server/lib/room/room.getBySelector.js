const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Get a room by selector
 * @param {string} selector - The selector of the room.
 * @example
 * gladys.room.getBySelector('living-room');
 */
async function getBySelector(selector) {
  const room = await db.Room.findOne({
    where: {
      selector,
    },
  });

  if (room === null) {
    throw new NotFoundError('Room not found');
  }

  return room.get({ plain: true });
}

module.exports = {
  getBySelector,
};
