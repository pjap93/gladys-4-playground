const asyncMiddleware = require('../middlewares/asyncMiddleware');


module.exports = function CalendarController(gladys) {
  /**
   * @api {post} /api/v1/calendar create
   * @apiName create
   * @apiGroup Calendar
   *
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
   */
  async function update(req, res) {
    const calendar = await gladys.calendar.update(req.params.calendar_selector, req.body);
    res.json(calendar);
  }

  /**
   * @api {delete} /api/v1/calendar/:calendar_selector delete
   * @apiName delete
   * @apiGroup Calendar
   *
   */
  async function destroy(req, res) {
    await gladys.calendar.destroy(req.params.calendar_selector);
    res.json({
      success: true,
    });
  }

  /**
   * @api {post} /api/v1/calendar/:calendar_selector/event createEvent
   * @apiName createEvent
   * @apiGroup Calendar
   *
   */
  async function createEvent(req, res) {
    const calendarEvent = await gladys.calendar.createEvent(req.params.calendar_selector, req.body);
    res.status(201).json(calendarEvent);
  }

  /**
   * @api {patch} /api/v1/calendar/event/:calendar_event_selector updateEvent
   * @apiName updateEvent
   * @apiGroup Calendar
   *
   */
  async function updateEvent(req, res) {
    const calendarEvent = await gladys.calendar.updateEvent(req.params.calendar_event_selector, req.body);
    res.json(calendarEvent);
  }

  /**
   * @api {delete} /api/v1/calendar/event/:calendar_event_selector destroyEvent
   * @apiName destroyEvent
   * @apiGroup Calendar
   *
   */
  async function destroyEvent(req, res) {
    await gladys.calendar.destroyEvent(req.params.calendar_event_selector);
    res.json({
      success: true,
    });
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    destroy: asyncMiddleware(destroy),
    update: asyncMiddleware(update),
    createEvent: asyncMiddleware(createEvent),
    updateEvent: asyncMiddleware(updateEvent),
    destroyEvent: asyncMiddleware(destroyEvent),
  });
};
