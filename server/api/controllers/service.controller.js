const asyncMiddleware = require('../middlewares/asyncMiddleware');
const { EVENTS, ACTIONS, ACTIONS_STATUS } = require('../../utils/constants');

module.exports = function ServiceController(gladys) {
  /**
   * @api {post} /api/v1/service/:service_name/start start
   * @apiName start
   * @apiGroup Service
   *
   */
  async function start(req, res) {
    const action = {
      type: ACTIONS.SERVICE.START,
      service: req.params.service_name,
      status: ACTIONS_STATUS.PENDING,
    };
    gladys.event.emit(EVENTS.ACTION.TRIGGERED, action);
    res.json(action);
  }

  /**
   * @api {post} /api/v1/service/:service_name/stop stop
   * @apiName stop
   * @apiGroup Service
   *
   */
  async function stop(req, res) {
    const action = {
      type: ACTIONS.SERVICE.STOP,
      service: req.params.service_name,
      status: ACTIONS_STATUS.PENDING,
    };
    gladys.event.emit(EVENTS.ACTION.TRIGGERED, action);
    res.json(action);
  }

  return Object.freeze({
    start: asyncMiddleware(start),
    stop: asyncMiddleware(stop),
  });
};
