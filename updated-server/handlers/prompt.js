const db = require("../models");

exports.createPrompt = async function (req, res, next){
  try{
    let prompt = await db.Prompt.Create({
      text: req.body.text,
      user: req.params.id
    });
    let foundUser = await db.User.findById(req.params.id);
    foundUser.prompts.push(prompt.id);
    await foundUser.save();
    let foundPrompt = await db.Prompt.findById(prompt._id).
    populate("user", {
      username: true
    });
    return res.status(200).json(foundPrompt);
  } catch(err){
    return next(err);
  }
};


