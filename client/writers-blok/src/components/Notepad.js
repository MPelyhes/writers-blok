import React from 'react';

const Notepad = () => {
  return (
    <div className="notepad">
      <div className="title">
        <h1>Title</h1><span className="blinking-cursor">|</span>
      </div>
      <textarea rows="4" cols="50" placeholder="Select a prompt to begin your writing warm-up"></textarea>
      <button className="save-button">Save</button>
    </div>
  )
}

export default Notepad;