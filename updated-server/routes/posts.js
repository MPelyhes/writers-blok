const express = require("express");
const router = express.Router({ mergeParams: true });

const { createPost, getPosts } = require("../handlers/post")

router.route("/")
  .post(createPost)
  .get(getPosts);


module.exports = router;