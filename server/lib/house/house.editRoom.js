const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Edit a room.
 * @param {string} selector - The selector of the room.
 * @param {Object} room - The new room.
 * @example
 * gladys.house.editRoom('kitchen', {
 *    name: 'New Kitchen'
 * });
 */
async function editRoom(selector, room) {
  const existingRoom = await db.Room.findOne({
    where: {
      selector,
    },
  });

  if (existingRoom === null) {
    throw new NotFoundError('Room not found');
  }

  await existingRoom.update(room);

  return existingRoom.get({ plain: true });
}

module.exports = {
  editRoom,
};
