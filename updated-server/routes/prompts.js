const express = require("express");
const router = express.Router({ mergeParams: true });


const { createPrompt, getPrompt } = require("../handlers/prompt");

router.route("/")
  .post(createPrompt)
  .get(getPrompt);


module.exports = router;