const db = require("../models");

exports.createPrompt = async function(req, res, next) {
  console.log(req.body);
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
  console.log("We made it");
  try{
    //Get all the prompts from the database and sort them in descending order so that users will see the most recent prompts first
    const prompts = await db.Prompt.find({}).sort({createdAt: "desc"})
    console.log({prompts})
    return res.status(200).json(prompts);
  } catch (err) {
    return next(err);
  }
}
