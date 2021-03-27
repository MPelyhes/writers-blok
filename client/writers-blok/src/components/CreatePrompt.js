import React from 'react';

const CreatePrompt = () => {
  return(
    <div className="create-prompt-container">
      <h3>Create New Prompt</h3>
      <form className="create-prompt-form">
        <div>
          <label htmlFor="title"></label>
          <input type="text" className="create-title" name="title" placeholder="Title" />
        </div>
        <div >
          <label htmlFor="prompt"></label>
          <textarea className="create-prompt" name="prompt" rows="4" placeholder="Prompt Description" />
        </div>
        <button className="save-button">Save</button>
      </form>
    </div>
  )
}

export default CreatePrompt;