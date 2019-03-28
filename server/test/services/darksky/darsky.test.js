const { expect } = require('chai');
const proxyquire = require('proxyquire').noCallThru();
const weatherExample = require('./weather.json');

const DarkSkyService = proxyquire('../../../services/darksky/index', {
  axios: {
    default: {
      get: () => ({ data: weatherExample }),
    },
  },
});

const gladys = {
  variable: {
    getValue: () => Promise.resolve('DARK_SKY_API_KEY'),
  },
};

describe('DarkSkyService', () => {
  const darkSkyService = DarkSkyService(gladys, '35deac79-f295-4adf-8512-f2f48e1ea0f8');
  it('should start service', async () => {
    await darkSkyService.start();
  });
  it('should stop service', async () => {
    await darkSkyService.stop();
  });
  it('should return weather formatted', async () => {
    const weather = await darkSkyService.weather.get({
      latitude: 12,
      longitude: 10,
    });
    expect(weather).to.deep.equal({
      temperature: 54.87,
      humidity: 0.76,
      pressure: 1019.4,
      datetime: new Date('2019-03-28T07:50:18.000Z'),
      units: 'si',
      windSpeed: 5.25,
      weather: 'cloud',
    });
  });
});
