const express = require("express");
const router = express.Router({ mergeParams: true });
const { loginRequired } = require("../middleware/auth");

const { createPrompt, getPrompt } = require("../handlers/prompt");

router.route("/")
  .post(loginRequired, createPrompt)
  .get(getPrompt);


module.exports = router;