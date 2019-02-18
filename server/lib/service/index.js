const { load } = require('./service.load');

const Service = function Service() {};

Service.prototype.load = load;

module.exports = Service;
