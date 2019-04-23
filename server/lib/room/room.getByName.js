const { Op } = require('sequelize');
const Sequelize = require('sequelize');
const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');

/**
 * @description Get a room by name
 * @param {string} name - The name of the room.
 * @example
 * gladys.room.getByName('living room');
 */
async function getByName(name) {
  const room = await db.Room.findOne({
    where: Sequelize.where(
      Sequelize.fn('lower', Sequelize.col('name')), {
        [Op.like]: `%${name}%`,
      },
    ),
  });

  if (room === null) {
    throw new NotFoundError('Room not found');
  }

  return room.get({ plain: true });
}

module.exports = {
  getByName,
};
