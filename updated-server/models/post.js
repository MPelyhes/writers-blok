const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema ({
  text: {
    type: String,
    required: true,
    maxLength: 1500
  },
  title: {
    type: String,
    required: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }
})

module.exports = mongoose.model('Post', PostSchema)