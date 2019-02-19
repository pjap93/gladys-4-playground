
/**
 * @description Reply to a question from the user.
 * @param {string} text - The answer to send.
 * @param {string} source - The name of the integrations.
 * @param {string} sourceUserId - The identifier of the user given by the source.
 * @example
 * reply('thanks', 'telegram', 'XXXX');
 */
async function reply(text, source, sourceUserId) {
  await this.service.getService(source).message.send(text, {
    source_user_id: sourceUserId,
  });
}

module.exports = {
  reply,
};
