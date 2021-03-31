const mongoose = require('mongoose');

const PromptSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
    maxLength: 160
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  background: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Prompt', PromptSchema)