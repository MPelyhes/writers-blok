const db = require("../models");

// exports.createPrompt = async function (req, res, next){
//   try{
//     let prompt = await db.Prompt.Create({
//       text: req.body.text,
//       user: req.params.id
//     });
//     let foundUser = await db.User.findById(req.params.id);
//     foundUser.prompts.push(prompt.id);
//     await foundUser.save();
//     let foundPrompt = await db.Prompt.findById(prompt._id).
//     populate("user", {
//       username: true
//     });
//     return res.status(200).json(foundPrompt);
//   } catch(err){
//     return next(err);
//   }
// };

module.exports.createPrompt = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    const prompt = new Prompt(req.body.prompt);
    prompt.author = req.user.username;
    user.prompts.push(prompt._id);
    await prompt.save();
    await user.save();
    console.log(prompt);
  } catch (err) {
    return next(err);
  }
};


exports.getPrompt = async function (req, res, next){
  try{
    const prompts = await Prompt.find({});
    return res.status(200).json(prompts);
  } catch (err) {
    return next(err);
  }
}
