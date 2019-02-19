const { load } = require('./service.load');
const { start } = require('./service.start');
const { getService } = require('./service.getService');

const Service = function Service() {
  this.services = {};
};

Service.prototype.load = load;
Service.prototype.start = start;
Service.prototype.getService = getService;

module.exports = Service;
