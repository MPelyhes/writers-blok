import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { postPrompt } from "../store/actions/prompts";
import Alert from "./Alert";
import CharacterCounter from "./CharacterCounter";


const CreatePrompt = ({ currentUser, errors, postPrompt }) => {
  
 const [title, setTitle]  = useState("");
 const [prompt, setPrompt] = useState("");
 const [titleValid, setTitleValid] = useState(true);
 const [promptValid, setPromptValid] = useState(true);

 const history = useHistory();
 const { username, id }  = currentUser.user;


 const handleSubmit = async (e) => {
   e.preventDefault(); 
   if(!titleValid || !promptValid){
     return Alert("Uh oh!", "It looks like your prompt could use some shortening!")
   }
   await postPrompt({ title, prompt, username, id }).then(() => {
     Alert("Success!", "Thank you! Sharing your writing prompt ideas helps kick-start the writing process for others in the Writer's BLOK community.")
    history.push("/prompts")
    console.log("Posted!");
   }).catch((err) => {
    return;
  })
 }

  return(
    <div className="form-container">
      {!currentUser.user.username && (
        <div className="error">You must be logged in to create a prompt</div>
      )}
      {errors.message && <div className="error">{errors.message}</div>}
      <h3>Create New Prompt</h3>
      <form className="create-prompt-form" onSubmit={handleSubmit} >
        <div>
          <label htmlFor="title"></label>
          <input type="text" className="input" name="title" placeholder="Title"  onChange={(e) => setTitle(e.target.value)} value={title}/>
        </div>
        {title.length > 0 &&( <CharacterCounter maxChar={30} currentStr={title} setValid={setTitleValid} /> )}
        <div>
          <label htmlFor="prompt"></label>
          <textarea className="create-prompt" name="prompt" rows="4" placeholder="Prompt Description" onChange={(e) => setPrompt(e.target.value)}  value={prompt} />
        </div>
        {prompt.length > 0 &&( <CharacterCounter maxChar={300} currentStr={prompt} setValid={setPromptValid} /> )}
        {currentUser.user.username && (<button type="submit" className="save-button">Save</button>)}      
      </form>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {postPrompt})(CreatePrompt);