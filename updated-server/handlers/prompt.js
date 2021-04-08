const db = require("../models");

exports.createPrompt = async function(req, res, next) {
  // console.log(req.body);
  try{
    let prompt = await db.Prompt.create({
      prompt: req.body.prompt,
      title: req.body.title,
      author: req.body.username
    });
    let foundUser = await db.User.findById(req.body.id);
    foundUser.prompts.push(prompt.id);
    await foundUser.save();
    return res.status(200).json(prompt);
  } catch (err) {
    return next(err);
  }
}

exports.getPrompt = async function (req, res, next){
  console.log(req.body.sortSelect);
  try{
    //Get all the prompts from the database and sort them in descending order by number of likes or most recent posting, depending on user selection
    const prompts = await db.Prompt.find({}).sort({[req.body.sortSelect]: "desc"})
    // console.log({prompts})
    return res.status(200).json(prompts);
  } catch (err) {
    return next(err);
  }
}

exports.updatePromptLikes = async function (req, res, next){
  const filter = {_id: req.body.id};
  const update = {likes: req.body.newLikes};
 
  try{
    const prompt = await db.Prompt.findOneAndUpdate(filter, update);
    console.log(prompt);
    return res.status(200).json(prompt);
  } catch (err) {
    return next(err);
  }
}