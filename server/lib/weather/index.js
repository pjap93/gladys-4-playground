const { get } = require('./weather.get');

const Weather = function Weather(service) {
  this.service = service;
};

Weather.prototype.get = get;

module.exports = Weather;
