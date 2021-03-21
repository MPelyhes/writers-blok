require('dotenv').config();

const express = require('express');
const session = require('express-session');
const passport = require('passport')
const LocalStrategy = require('passport-local');
const ExpressError = require('./utils/ExpressError');

const app = express();

app.use(express.urlencoded({ extended: true }));

const sessionConfig = {
  secret: 'thissecretistemporary',
  name: '_nzur',
  resave: false,
  saveUninitialized: true,
  // Set up mongo store when ready to deploy!
  cookie: {
    httpOnly: true,
    // secure: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7, // expires in one week
    maxAge: 1000 * 60 * 60 * 24 * 7 // one week
  }
}

app.use(session(sessionConfig))

//Everything needed to set up passport in the app file
app.use(passport.initialize());
app.use(passport.session()); 
// passport.use(new LocalStrategy(User.authenticate()));

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// app.use((req, res, next) => {
//   res.locals.currentUser = req.user;
//   //Add these in if flash ends up being used in this project
//   // res.locals.success = req.flash('success');
//   // res.locals.error = req.flash('error');
//   next();
// })

//Routes will go here

app.all('*', (req, res, next) => {
  next(new ExpressError('Page Not Found', 404))
})

app.use((err, req, res, next) => {
  const { statusCode = 500, message = 'Something went wrong' } = err;

  if(!err.message) err.message = 'Oh no! Something went wrong!'
  res.status(statusCode).send({ err });
  // res.status(statusCode).render('error', { err }) Add this back in when flash is set up
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serving on Port ${port}`)
})