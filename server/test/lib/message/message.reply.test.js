const { assert, fake } = require('sinon');
const EventEmitter = require('events');
const MessageHandler = require('../../../lib/message');

let send;

// mocks
const classification = { intent: 'light.turnon', entities: [{ hey: 1 }] };
const brain = {
  classify: () => Promise.resolve({ classification }),
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

describe('message.reply', () => {
  const eventEmitter = new EventEmitter();
  const messageHandler = new MessageHandler(eventEmitter, brain, service);
  it('should send reply', async () => {
    await messageHandler.reply('hey!', 'telegram', 'XXXX');
    assert.calledWith(send, 'hey!', {
      source_user_id: 'XXXX',
    });
  });
});
