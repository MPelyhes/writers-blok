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

// module.exports.createPrompt = async (req, res, next) => {
//   try {
//     const user = await User.findById(req.params.id);
//     const prompt = new Prompt(req.body.prompt);
//     prompt.author = req.user.username;
//     user.prompts.push(prompt._id);
//     await prompt.save();
//     await user.save();
//     console.log(prompt);
//   } catch (err) {
//     return next(err);
//   }
// };


exports.getPrompt = async function (req, res, next){
  try{
    const prompts = await Prompt.find({});
    return res.status(200).json(prompts);
  } catch (err) {
    return next(err);
  }
}
