const { create } = require('./location.create');
const { get } = require('./location.get');

const Location = function Location() {};

Location.prototype.create = create;
Location.prototype.get = get;

module.exports = Location;
