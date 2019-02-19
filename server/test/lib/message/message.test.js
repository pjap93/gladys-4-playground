const { expect } = require('chai');
const EventEmitter = require('events');
const MessageHandler = require('../../../lib/message');

describe('message.new-message', () => {
  const eventEmitter = new EventEmitter();
  const classification = { intent: 'light.turnon', entities: [{ hey: 1 }] };
  const messageHandler = new MessageHandler(eventEmitter, {
    classify: () => Promise.resolve({ classification }),
  });
  it('should handle new message', async () => {
    await messageHandler.new({
      text: 'Turn on the light in the kitchen',
      language: 'en',
      source: 'client-api',
      source_user_id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
      user_id: '0cd30aef-9c4e-4a23-88e3-3547971296e5',
    });
  });
});
