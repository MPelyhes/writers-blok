const express = require("express");
const router = express.Router();
const { signup, signin } = require("../handlers/auth");

router.post("/register", signup);
router.post("/signin", signin);

module.exports = router;
