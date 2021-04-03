import React from "react";

const PromptItem = ({ prompt, title, author }) => {


  return(
    <div className="prompt-container">
      <h2>{title || "Title"}</h2>
      <div className="prompt">
        {prompt || "This is where a really cool description of the prompt would go! I would put lorem ipsum text here, but I forgot how to do that quickly using emmett. Oh well!"}
      </div>
      <div className="prompt-author">
        Submitted by <span className="colon">:</span> {author || "Matt Pelyhes"}
      </div>
    </div>
  )
}

export default PromptItem;