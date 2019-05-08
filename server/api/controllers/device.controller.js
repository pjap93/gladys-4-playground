const asyncMiddleware = require('../middlewares/asyncMiddleware');

module.exports = function DeviceController(gladys) {
  /**
   * @api {get} /api/v1/device/:device_selector getBySelector
   * @apiName getBySelector
   * @apiGroup Device
   */
  async function getBySelector(req, res) {
    const device = gladys.device.getBySelector(req.params.device_selector);
    res.json(device);
  }

  return Object.freeze({
    getBySelector: asyncMiddleware(getBySelector),
  });
};
