const { create } = require('./room.create');
const { getByName } = require('./room.getByName');
const { update } = require('./room.update');
const { destroy } = require('./room.destroy');

const Room = function Room() {};

Room.prototype.create = create;
Room.prototype.getByName = getByName;
Room.prototype.update = update;
Room.prototype.destroy = destroy;

module.exports = Room;
