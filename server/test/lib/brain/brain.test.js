const { expect } = require('chai');
const Brain = require('../../../lib/brain');

describe('brain.train', () => {
  const brain = new Brain();
  it('should train brain', async () => {
    await brain.train();
  });
  it('should classify sentence', async () => {
    const firstQuestionResponse = await brain.classify('Order me a taxi in 5 minutes', 'en');
    const secondQuestionResponse = await brain.classify('Paris', 'en', firstQuestionResponse.context);
    expect(firstQuestionResponse).to.have.property('result');
    expect(firstQuestionResponse).to.have.property('context');
    expect(secondQuestionResponse).to.have.property('result');
    expect(secondQuestionResponse).to.have.property('context');
  });
});
