const { fake } = require('sinon');
const EventEmitter = require('events');

const ZwaveMock = function ZwaveMock(options) {
};

ZwaveMock.prototype = Object.create(new EventEmitter());

ZwaveMock.prototype.connect = fake.returns(null);
ZwaveMock.prototype.disconnect = fake.returns(null);
ZwaveMock.prototype.setValue = fake.returns(null);
ZwaveMock.prototype.hardReset = fake.returns(null);
ZwaveMock.prototype.softReset = fake.returns(null);
ZwaveMock.prototype.healNetwork = fake.returns(null);
ZwaveMock.prototype.requestAllConfigParams = fake.returns(null);
ZwaveMock.prototype.setNodeName = fake.returns(null);

module.exports = ZwaveMock;
