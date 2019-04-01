const { create } = require('./house.create');
const { destroy } = require('./house.destroy');
const { get } = require('./house.get');
const { getRooms } = require('./house.getRooms');
const { update } = require('./house.update');

const House = function House() {};

House.prototype.create = create;
House.prototype.destroy = destroy;
House.prototype.get = get;
House.prototype.getRooms = getRooms;
House.prototype.update = update;

module.exports = House;
