import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as liked } from "@fortawesome/free-solid-svg-icons";
import {faThumbsUp as notLiked } from "@fortawesome/free-regular-svg-icons"

const PromptItem = ({ text, title, author, likes, onPromptSelect, selectedPrompt }) => {
  const [likeButton, setLikedButton] = useState(false);
  const [pseudoLikes, setPseudoLikes] = useState(likes);

  const handleLike = () => {
    if(likeButton){
      setLikedButton(false)
      setPseudoLikes( pseudoLikes - 1)
    } else {
      setLikedButton(true)
      setPseudoLikes(pseudoLikes + 1)
    }
  };

  return(
    <div className={title === selectedPrompt ? "prompt-container prompt-selected" : "prompt-container"} onClick={() => onPromptSelect(title)}>
      <h2>{title || "Title"}</h2>
      <div className="prompt">
        {text || "This is where a really cool description of the prompt would go! I would put lorem ipsum text here, but I forgot how to do that quickly using emmett. Oh well!"}
      </div>
      <div className="prompt-bottom">
        <div className="prompt-author">
          Submitted By <span className="colon">:</span> {author || "Matt Pelyhes"}
        </div>
        <div className="like-container">
          <div className="icon-container" onClick={handleLike}>
            {!likeButton ? <FontAwesomeIcon icon={notLiked}  className="icon" /> : <FontAwesomeIcon icon={liked} className="icon" />}
          </div>
          <div className="total-likes">{pseudoLikes}</div>
        </div>
      </div>
    </div>
  );
};

export default PromptItem;