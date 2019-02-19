const { load } = require('./service.load');
const { start } = require('./service.start');
const { startAll } = require('./service.startAll');
const { getService } = require('./service.getService');

const Service = function Service() {
  this.services = {};
};

Service.prototype.load = load;
Service.prototype.start = start;
Service.prototype.startAll = startAll;
Service.prototype.getService = getService;

module.exports = Service;
