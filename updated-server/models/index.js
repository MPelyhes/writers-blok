if(process.env.NODE_ENV !== 'production'){
  require('dotenv').config();
}

const dbUrl = process.env.DB_URL;

const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(dbUrl, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

module.exports.User = require("./user");
module.exports.Post = require("./post");
module.exports.Prompt = require("./prompt")
