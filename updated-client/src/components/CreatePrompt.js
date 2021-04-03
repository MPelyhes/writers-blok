import React from 'react';


const CreatePrompt = ({ currentUser }) => {
  console.log(currentUser)
  return(
    <div className="form-container">
      {!currentUser.user.username && (
        <div className="error">You must be logged in to create a prompt</div>
      )}
      <h3>Create New Prompt</h3>
      <form className="create-prompt-form">
        <div>
          <label htmlFor="title"></label>
          <input type="text" className="input" name="title" placeholder="Title" />
        </div>
        <div>
          <label htmlFor="prompt"></label>
          <textarea className="create-prompt" name="prompt" rows="4" placeholder="Prompt Description" />
        </div>
        {currentUser.user.username && (<button className="save-button">Save</button>)}      
      </form>
    </div>
  )
}

export default CreatePrompt;