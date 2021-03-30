const mongoose = require('mongoose');
mongoose.set('debug', true);
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/writers-blok', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// const db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", () => {
//     console.log("Database connected");
// });

//User models exported from the index file!!!
module.exports.User = require('./user');
module.exports.Prompt = require('./prompt');
module.exports.Post = require('./post');