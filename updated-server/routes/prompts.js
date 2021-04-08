const express = require("express");
const router = express.Router({ mergeParams: true });


const { createPrompt, getPrompt, updatePromptLikes } = require("../handlers/prompt");

router.route("/")
  .post(createPrompt)

router.route("/fetch").post(getPrompt)

router.route("/:id").put(updatePromptLikes);

module.exports = router;