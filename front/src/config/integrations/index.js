import deviceEn from './device.en.json';
import communicationEn from './communication.en.json';

const integrations = {
  en: {
    totalSize: deviceEn.length + communicationEn.length,
    device: deviceEn,
    communication: communicationEn
  }
};

communicationEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

deviceEn.forEach(integration => {
  integrations.en[integration.key] = integration;
});

export default integrations;
