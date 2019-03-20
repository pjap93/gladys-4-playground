const { expect } = require('chai');

const Service = require('../../../lib/service');

const services = {
  example: () => ({
    start: async () => Promise.resolve(),
  }),
};

const gladys = {
  version: '0.1.0',
};

describe('service', () => {
  const service = new Service(services);
  it('should start a service', async () => {
    await service.load(gladys);
    await service.start('example');
  });
  it('should return the example service', async () => {
    expect(service.getService('example')).to.be.instanceOf(Object).and.to.be.not.null; // eslint-disable-line
  });
  it('should return null a service', async () => {
    expect(service.getService('DONOTEXIST')).to.be.null; // eslint-disable-line
  });
  it('should return service with message capabilities', async () => {
    const messageServices = await service.getMessageServices();
    expect(messageServices).to.be.instanceOf(Array);
  });
});
