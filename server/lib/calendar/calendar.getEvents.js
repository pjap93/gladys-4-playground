const { Op } = require('sequelize');
const db = require('../../models');

/**
 * @description Get calendar events
 * @param {string} userId - The user id.
 * @param {Object} options - Options of the query.
 * @example
 * gladys.calendar.getEvents();
 */
async function getEvents(userId, options) {
  const calendarEvents = await db.CalendarEvent.findAll({
    include: [{
      model: db.Calendar,
      as: 'calendar',
      attributes: ['name', 'selector'],
      where: {
        user_id: userId,
      },
    }],
    where: {
      start: {
        [Op.gte]: new Date(options.from),
        [Op.lte]: new Date(options.to),
      },
    },
  });

  const plainCalendarEvents = calendarEvents.map(calendarEvent => calendarEvent.get({ plain: true }));

  return plainCalendarEvents;
}

module.exports = {
  getEvents,
};
