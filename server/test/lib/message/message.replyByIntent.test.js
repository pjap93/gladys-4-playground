const { assert, fake } = require('sinon');
const EventEmitter = require('events');
const MessageHandler = require('../../../lib/message');

let send;

// mocks
const classification = { intent: 'light.turnon', entities: [{ hey: 1 }] };
const brain = {
  classify: () => Promise.resolve({ classification }),
  getReply: () => 'this is the reply!',
};
const service = {
  getService: () => {
    send = fake.resolves(true);
    return {
      message: {
        send,
      },
    };
  },
};

describe('message.replyByIntent', () => {
  const eventEmitter = new EventEmitter();
  const messageHandler = new MessageHandler(eventEmitter, brain, service);
  it('should send reply', async () => {
    const message = {
      language: 'en',
      source: 'api-client',
      source_user_id: 'XXXX',
    };
    await messageHandler.replyByIntent(message, 'light.turnon.success', {});
    assert.calledWith(send, 'this is the reply!', {
      source_user_id: 'XXXX',
    });
  });
});
