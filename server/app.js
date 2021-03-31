require('dotenv').config();

const express = require('express');
const cors = require('cors');
// const session = require('express-session');
// const passport = require('passport')
// const LocalStrategy = require('passport-local');
const ExpressError = require('./utils/ExpressError');
const models = require('./models');
const User = require('./models/user');
const db = require('./models')


const users = require('./routes/users');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));


//Routes will go here
app.use('/api/auth', users);

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404))
})

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Something went wrong' } = err;

  if(!err.message) err.message = 'Oh no! Something went wrong!'
  res.status(statusCode).send({ err });
  // res.status(statusCode).render('error', { err }) Add this back in when flash is set up
});

const port = process.env.PORT || 8081;
app.listen(port, () => {
  console.log(`Serving on Port ${port}`)
})