const asyncMiddleware = require('../middlewares/asyncMiddleware');

module.exports = function LocationController(gladys) {
  /**
   * @api {post} /api/v1/user/:user_selector/location createLocation
   * @apiName createLocation
   * @apiGroup Location
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
