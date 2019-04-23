const { create } = require('./room.create');
const { getByName } = require('./room.getByName');
const { getAll } = require('./room.getAll');
const { init } = require('./room.init');
const { update } = require('./room.update');
const { destroy } = require('./room.destroy');

const Room = function Room(brain) {
  this.brain = brain;
};

Room.prototype.create = create;
Room.prototype.getAll = getAll;
Room.prototype.getByName = getByName;
Room.prototype.init = init;
Room.prototype.update = update;
Room.prototype.destroy = destroy;

module.exports = Room;
