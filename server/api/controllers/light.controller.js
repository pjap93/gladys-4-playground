const asyncMiddleware = require('../middlewares/asyncMiddleware');
const { EVENTS, ACTIONS, ACTIONS_STATUS } = require('../../utils/constants');

module.exports = function LightController(gladys) {
  /**
   * @api {post} /api/light/:device_selector/on Turn On the light
   * @apiName TurnOn
   * @apiGroup Light
   */
  async function turnOn(req, res) {
    const action = {
      type: ACTIONS.LIGHT.TURN_ON,
      device: req.params.device_selector,
      status: ACTIONS_STATUS.PENDING,
    };
    gladys.event.emit(EVENTS.ACTION.TRIGGERED, action);
    res.json(action);
  }

  return Object.freeze({
    turnOn: asyncMiddleware(turnOn),
  });
};
