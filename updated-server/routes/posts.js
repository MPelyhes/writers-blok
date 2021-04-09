const express = require("express");
const router = express.Router({ mergeParams: true });

const { createPost, getPosts, deletePost } = require("../handlers/post")

router.route("/")
  .post(createPost)
  .get(getPosts)
  .put(deletePost);

module.exports = router;