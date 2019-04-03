const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @public
 * @description Delete a room.
 * @param {string} selector - The selector of the room to delete.
 * @example
 * gladys.house.destroyRoom('kitchen');
 */
async function destroyRoom(selector) {
  const room = await db.Room.findOne({
    where: {
      selector,
    },
  });

  if (room === null) {
    throw new NotFoundError('Room not found');
  }

  await room.destroy();
}

module.exports = {
  destroyRoom,
};
