require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

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