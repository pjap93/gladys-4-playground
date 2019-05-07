const { assert, fake } = require('sinon');
const { EVENTS } = require('../../../utils/constants');
const MockedMqttClient = require('./mocks.test');

const gladys = {
  variable: {
    getValue: fake.resolves('result'),
  },
  event: {
    emit: fake.returns(null),
  },
};

const MqttHandler = require('../../../services/mqtt/lib');

describe('MqttHandler', () => {
  const mqttHandler = new MqttHandler(gladys, MockedMqttClient, 'url', 'username', 'password', 'faea9c35-759a-44d5-bcc9-2af1de37b8b4');
  it('should call connect function', () => {
    mqttHandler.connect();
    assert.called(MockedMqttClient.connect);
  });
  it('should create device', () => {
    mqttHandler.handleNewMessage('gladys/master/device/create', '{}');
    assert.calledWith(gladys.event.emit, EVENTS.DEVICE.NEW, {});
  });
  it('should not do anything, topic not found', () => {
    mqttHandler.handleNewMessage('UNKNOWN_TOPIC', '{}');
  });
});
