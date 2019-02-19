const { expect } = require('chai');

const Service = require('../../../lib/service');

describe('service', () => {
  const service = new Service();
  const gladys = {};
  it('should start a service', async () => {
    service.start(gladys, 'example');
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
