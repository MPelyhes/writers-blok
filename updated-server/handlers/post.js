const db = require("../models");

exports.createPost = async function(req, res, next){
  console.log(req.body);
  try{
    let post = await db.Post.create({
      post: req.body.post,
      title: req.body.title,
      author: req.body.username
    })
    let foundUser = await db.User.findById(req.body.id);
    foundUser.posts.push(post.id);
    await foundUser.save();
    return res.status(200).json(post);
  } catch(err) {
    return next(err);
  }
}

exports.getPosts = async function (req, res, next){
  const { id} = (req.params);
  console.log(id)
  try{
    //Get all the posts from the database and sort them in descending order so that users will see the most recent posts first
    let userPosts = await db.User.findById(id).populate({path: "posts", options: { sort: {createdAt: "desc"} }});
    console.log(userPosts.posts);
    return res.status(200).json(userPosts.posts);
  } catch(err) {
    return next(err);
  }
}