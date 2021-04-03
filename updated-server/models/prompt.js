const mongoose = require('mongoose');

const PromptSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
    maxLength: 160
  },
  title: {
    type: String,
    required: true,
    maxLength: 30
  },
  author: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Prompt', PromptSchema)