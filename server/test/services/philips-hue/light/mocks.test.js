
const MockedPhilipsHueClient = {
  nupnpSearch: () => Promise.resolve([{
    name: 'Philips hue',
    ipaddress: '192.168.2.245',
  }]),
};

module.exports = MockedPhilipsHueClient;
