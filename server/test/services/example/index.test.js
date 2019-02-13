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
  it('should have light object', () => {
    exampleService.should.have.property('light').which.is.a.Object();
  });
  it('exampleService.light should have turnOn function', () => {
    exampleService.light.should.have.property('turnOn').which.is.a.Function();
  });
  it('exampleService.light should have turnOff function', () => {
    exampleService.light.should.have.property('turnOff').which.is.a.Function();
  });
});

describe('ExampleService lifecycle', () => {
  const exampleService = ExampleService();
  it('should start the service', async () => {
    await exampleService.start();
  });
  it('should stop the service', async () => {
    await exampleService.stop();
  });
});

describe('ExampleService.light', () => {
  const exampleService = ExampleService();
  const deviceFeature = {
    id: 'd0a6cfc7-fe07-4df1-b0db-70d878bcdd2b',
    external_id: 'example:1',
    type: 'binary',
  };
  it('should turnOn the light', async () => {
    await exampleService.light.turnOn(deviceFeature);
  });
  it('should turnOff the light', async () => {
    await exampleService.light.turnOff(deviceFeature);
  });
  it('should get the state of the light', async () => {
    const value = await exampleService.light.getState(deviceFeature);
    value.should.equal(1);
  });
});
