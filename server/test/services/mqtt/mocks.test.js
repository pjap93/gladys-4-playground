const { fake } = require('sinon');

const MockedMqttClient = {
  connect: fake.returns({
    on: fake.returns(null),
    emit: fake.returns(null),
  }),
};

module.exports = MockedMqttClient;
