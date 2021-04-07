import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as liked } from "@fortawesome/free-solid-svg-icons";
import {faThumbsUp as notLiked } from "@fortawesome/free-regular-svg-icons"

const PromptItem = ({ text, title, author, onPromptSelect, selectedPrompt }) => {
  const [likeButton, setLikedButton] = useState(false);

  const handleLike = () => {
    setLikedButton(true);
  };

  return(
    <div className={title === selectedPrompt ? "prompt-container prompt-selected" : "prompt-container"} onClick={() => onPromptSelect(title)}>
      <h2>{title || "Title"}</h2>
      <div className="prompt">
        {text || "This is where a really cool description of the prompt would go! I would put lorem ipsum text here, but I forgot how to do that quickly using emmett. Oh well!"}
      </div>
      <div className="icon-container" onClick={handleLike}>
        {!likeButton ? <FontAwesomeIcon icon={notLiked}  className="icon" /> : <FontAwesomeIcon icon={liked} className="icon" />}
      </div>
      <div className="prompt-author">
        Submitted By <span className="colon">:</span> {author || "Matt Pelyhes"}
      </div>
    </div>
  );
};

export default PromptItem;