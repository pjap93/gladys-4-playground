const proxyquire = require('proxyquire').noCallThru();
const MockedClient = require('./mocks.test');

const ExampleService = proxyquire('../../../services/example/index', {
  axios: MockedClient,
});

describe('ExampleService', () => {
  const exampleService = ExampleService();
  it('should have start function', () => {
    exampleService.should.have.property('start').which.is.a.Function();
  });
  it('should have stop function', () => {
    exampleService.should.have.property('start').which.is.a.Function();
  });
  it('should have device object', () => {
    exampleService.should.have.property('device').which.is.a.Object();
  });
  it('exampleService.device should have setValue function', () => {
    exampleService.device.should.have.property('setValue').which.is.a.Function();
  });
  it('exampleService.device should have setValue function', () => {
    exampleService.device.should.have.property('getValue').which.is.a.Function();
  });
});

describe('ExampleService.device', () => {
  const exampleService = ExampleService();
  const deviceFeature = {
    id: 'd0a6cfc7-fe07-4df1-b0db-70d878bcdd2b',
    external_id: 'example:1',
    type: 'binary',
  };
  it('should setValue device', async () => {
    await exampleService.device.setValue(deviceFeature, 10);
  });
  it('should getValue device', async () => {
    const value = await exampleService.device.getValue(deviceFeature);
    value.should.equal(5);
  });
});
