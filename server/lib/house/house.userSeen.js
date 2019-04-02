const db = require('../../models');
const { NotFoundError } = require('../../utils/coreErrors');
const { EVENTS } = require('../../utils/constants');

/**
 * @description User seen in house.
 * @param {string} houseSelector - The selector of the house.
 * @param {string} userSelector - The selector of the user.
 * @example
 * gladys.house.userSeen('main-house', 'john');
 */
async function userSeen(houseSelector, userSelector) {
  const house = await db.House.find({
    where: {
      selector: houseSelector,
    },
  });

  if (house === null) {
    throw new NotFoundError('House not found');
  }

  const user = await db.User.find({
    attributes: ['id', 'firstname', 'lastname', 'selector', 'email', 'current_house_id', 'last_house_changed'],
    where: {
      selector: userSelector,
    },
  });

  if (user === null) {
    throw new NotFoundError('User not found');
  }

  // user was not in this house before
  if (user.current_house_id !== house.id) {
    await user.update({ current_house_id: house.id, last_house_changed: new Date() });
    // so we emit back at home event
    this.event.emit(EVENTS.USER_PRESENCE.BACK_HOME, user.get({ plain: true }));
  } else {
    // otherwise, we just emit user seen event
    this.event.emit(EVENTS.USER_PRESENCE.SEEN_AT_HOME, user.get({ plain: true }));
  }

  return user.get({ plain: true });
}

module.exports = {
  userSeen,
};
