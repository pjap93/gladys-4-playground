const asyncMiddleware = require('../middlewares/asyncMiddleware');

module.exports = function LocationController(gladys) {
  /**
   * @api {post} /api/v1/user/:user_selector/location create
   * @apiName create
   * @apiGroup Location
   * @apiParam {Number} latitude Latitude of the user
   * @apiParam {Number} longitude Longitude of the user
   * @apiParam {Number} altitude Altitude of the user
   * @apiParam {Number} accuracy Accuracy of the geolocation
   */
  async function create(req, res) {
    const newLocation = await gladys.location.create(req.params.user_selector, req.body);
    res.status(201).json(newLocation);
  }

  /**
   * @api {get} /api/v1/user/:user_selector/location getLocationsUser
   * @apiName getLocationsUser
   * @apiGroup Location
   */
  async function getLocationsUser(req, res) {
    const locations = await gladys.location.get(req.params.user_selector, req.query);
    res.json(locations);
  }

  return Object.freeze({
    create: asyncMiddleware(create),
    getLocationsUser: asyncMiddleware(getLocationsUser),
  });
};
