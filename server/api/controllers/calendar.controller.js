const asyncMiddleware = require('../middlewares/asyncMiddleware');

/**
 * @apiDefine CalendarParam
 * @apiParam {String} name Name of the calendar.
 * @apiParam {String} description Description of the calendar
 * @apiParam {String} [selector] Selector of the calendar.
 * @apiParam {String} [external_id] External id of the calendar
 * @apiParam {Boolean} [sync] If Gladys need to sync the calendar or not
 * @apiParam {Boolean} [notify] If Gladys should by default notify the user about this calendar or not
 */

/**
 * @apiDefine CalendarSuccess
 * @apiSuccess {String} name Name of the calendar.
 * @apiSuccess {String} description Description of the calendar
 * @apiSuccess {String} [selector] Selector of the calendar.
 * @apiSuccess {String} [external_id] External id of the calendar
 * @apiSuccess {Boolean} [sync] If Gladys need to sync the calendar or not
 * @apiSuccess {Boolean} [notify] If Gladys should by default notify the user about this calendar or not
 */

/**
 * @apiDefine CalendarEventParam
 * @apiParam {String} name Name of the event.
 * @apiParam {String} [selector] Selector of the event.
 * @apiParam {String} [external_id] External id of the calendar
 * @apiParam {String} [location] Location of the event
 * @apiParam {String} start datetime when the event start
 * @apiParam {String} [end] datetime when the event ends
 * @apiParam {String} [external_id] External id of the calendar
 * @apiParam {Boolean} [full_day] If the event takes the full day
 */

/**
 * @apiDefine CalendarEventSuccess
 * @apiSuccess {String} name Name of the event.
 * @apiSuccess {String} [selector] Selector of the event.
 * @apiSuccess {String} [external_id] External id of the calendar
 * @apiSuccess {String} [location] Location of the event
 * @apiSuccess {String} start datetime when the event start
 * @apiSuccess {String} [end] datetime when the event ends
 * @apiSuccess {String} [external_id] External id of the calendar
 * @apiSuccess {Boolean} [full_day] If the event takes the full day
 */

module.exports = function CalendarController(gladys) {
  /**
   * @api {post} /api/v1/calendar create
   * @apiName create
   * @apiGroup Calendar
   * @apiUse CalendarParam
   * @apiUse CalendarSuccess
   */
  async function create(req, res) {
    req.body.user_id = req.user.id;
    const calendar = await gladys.calendar.create(req.body);
    res.status(201).json(calendar);
  }

  /**
   * @api {patch} /api/v1/calendar/:calendar_selector update
   * @apiName update
   * @apiGroup Calendar
   *
   * @apiUse CalendarParam
   * @apiUse CalendarSuccess
   */
  async function update(req, res) {
    const calendar = await gladys.calendar.update(req.params.calendar_selector, req.body);
    res.json(calendar);
  }

  /**
   * @api {delete} /api/v1/calendar/:calendar_selector delete
   * @apiName delete
   * @apiGroup Calendar
   */
  async function destroy(req, res) {
    await gladys.calendar.destroy(req.params.calendar_selector);
    res.json({
      success: true,
    });
  }

  /**
   * @api {post} /api/v1/calendar/:calendar_selector/event create event
   * @apiName create event
   * @apiGroup Calendar
   * @apiUse CalendarEventParam
   * @apiUse CalendarEventSuccess
   */
  async function createEvent(req, res) {
    const calendarEvent = await gladys.calendar.createEvent(req.params.calendar_selector, req.body);
    res.status(201).json(calendarEvent);
  }

  /**
   * @api {patch} /api/v1/calendar/event/:calendar_event_selector update event
   * @apiName update event
   * @apiGroup Calendar
   * @apiUse CalendarEventParam
   * @apiUse CalendarEventSuccess
   */
  async function updateEvent(req, res) {
    const calendarEvent = await gladys.calendar.updateEvent(req.params.calendar_event_selector, req.body);
    res.json(calendarEvent);
  }

  /**
   * @api {delete} /api/v1/calendar/event/:calendar_event_selector delete event
   * @apiName delete event
   * @apiGroup Calendar
   */
  async function destroyEvent(req, res) {
    await gladys.calendar.destroyEvent(req.params.calendar_event_selector);
    res.json({
      success: true,
    });
  }

  /**
   * @api {get} /api/v1/calendar get
   * @apiName get
   * @apiGroup Calendar
   */
  async function get(req, res) {
    const calendars = await gladys.calendar.get(req.user.id);
    res.json(calendars);
  }

  /**
   * @api {get} /api/v1/calendar/event get events
   * @apiName getEvents
   * @apiGroup Calendar
   */
  async function getEvents(req, res) {
    const calendarEvents = await gladys.calendar.getEvents(req.user.id, req.query);
    res.json(calendarEvents);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    update: asyncMiddleware(update),
    get: asyncMiddleware(get),
    getEvents: asyncMiddleware(getEvents),
    createEvent: asyncMiddleware(createEvent),
    updateEvent: asyncMiddleware(updateEvent),
    destroyEvent: asyncMiddleware(destroyEvent),
  });
};
