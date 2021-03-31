const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');



const { register, login } = require('../controllers/users');

router.post('/signup', catchAsync(register));
router.post('/login', catchAsync(login));

module.exports = router;