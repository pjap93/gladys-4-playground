
class HueApi {
  constructor() {
    this.userId = 'PHILIPS_HUE_USER_ID_TEST';
  }

  async registerUser(host, name) {
    return Promise.resolve(this.userId);
  }
}

const MockedPhilipsHueClient = {
  HueApi,
  nupnpSearch: () => Promise.resolve([{
    name: 'Philips hue',
    ipaddress: '192.168.2.245',
  }]),
};

module.exports = MockedPhilipsHueClient;
