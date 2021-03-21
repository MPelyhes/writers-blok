const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  posts: [{
    type: Schema.Types.ObjectId,
    ref:'posts'
  }],
  prompts: [{
    type: Schema.Types.ObjectId,
    ref: 'prompts'
  }]
});


UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model('User', UserSchema);