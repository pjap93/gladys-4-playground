const { NlpManager, NlgManager } = require('node-nlp');
const { SUPPORTED_LANGUAGES } = require('../../config/brain/index');

const Brain = function Brain() {
  this.nlpManager = new NlpManager({ languages: SUPPORTED_LANGUAGES });
  this.nlgManager = new NlgManager();
};

Brain.prototype.train = require('./brain.train');
Brain.prototype.classify = require('./brain.classify');

module.exports = Brain;
