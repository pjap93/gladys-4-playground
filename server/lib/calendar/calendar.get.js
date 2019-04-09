const db = require('../../models');

/**
 * @description Get calendars
 * @example
 * gladys.calendar.get();
 */
async function get() {
  const calendars = await db.Calendar.findAll();

  const plainCalendars = calendars.map(calendar => calendar.get({ plain: true }));

  return plainCalendars;
}

module.exports = {
  get,
};
