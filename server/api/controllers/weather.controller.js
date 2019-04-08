const asyncMiddleware = require('../middlewares/asyncMiddleware');
const { Error400 } = require('../../utils/httpErrors');

module.exports = function WeatherController(gladys) {
  /**
   * @api {get} /api/v1/user/:user_selector/weather getWeatherUser
   * @apiName getWeatherUser
   * @apiGroup Weather
   */
  async function getByUser(req, res) {
    const lastLocation = await gladys.location.getLast(req.params.user_selector);
    const options = {
      latitude: lastLocation.latitude,
      longitude: lastLocation.longitude,
      language: req.user.language,
    };
    const weatherResult = await gladys.weather.get(options);
    res.json(weatherResult);
  }

  /**
   * @api {get} /api/v1/house/:house_selector/weather getWeatherHouse
   * @apiName getWeatherHouse
   * @apiGroup Weather
   */
  async function getByHouse(req, res) {
    const house = await gladys.house.getBySelector(req.params.house_selector);
    if (!house.latitude || !house.longitude) {
      throw new Error400('House has not latitude/longitude specified.');
    }
    const options = {
      latitude: house.latitude,
      longitude: house.longitude,
      language: req.user.language,
    };
    const weatherResult = await gladys.weather.get(options);
    res.json(weatherResult);
  }

  return Object.freeze({
    getByHouse: asyncMiddleware(getByHouse),
    getByUser: asyncMiddleware(getByUser),
  });
};
