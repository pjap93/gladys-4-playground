const { addRoom } = require('./house.addRoom');
const { create } = require('./house.create');
const { editRoom } = require('./house.editRoom');
const { destroy } = require('./house.destroy');
const { destroyRoom } = require('./house.destroyRoom');
const { get } = require('./house.get');
const { getRooms } = require('./house.getRooms');
const { update } = require('./house.update');
const { userSeen } = require('./house.userSeen');

const House = function House(event) {
  this.event = event;
};

House.prototype.addRoom = addRoom;
House.prototype.create = create;
House.prototype.editRoom = editRoom;
House.prototype.destroy = destroy;
House.prototype.destroyRoom = destroyRoom;
House.prototype.get = get;
House.prototype.getRooms = getRooms;
House.prototype.update = update;
House.prototype.userSeen = userSeen;

module.exports = House;
