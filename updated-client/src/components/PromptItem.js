import React, {useState} from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp as liked } from "@fortawesome/free-solid-svg-icons";
import {faThumbsUp as notLiked } from "@fortawesome/free-regular-svg-icons"
import { updatePromptLikes } from "../store/actions/prompts";

const PromptItem = ({ text, title, author, likes, id, onPromptSelect, selectedPrompt, updatePromptLikes }) => {
  const [likeButton, setLikedButton] = useState(false);
  const [pseudoLikes, setPseudoLikes] = useState(likes);


  const handleLike = async (e) => {
   
    if(likeButton){
      setLikedButton(false)
      setPseudoLikes( pseudoLikes - 1)
      let newLikes = pseudoLikes - 1;
     await updatePromptLikes({newLikes, id})
      console.log("clicked")
    } else {
      setLikedButton(true)
      await setPseudoLikes(pseudoLikes + 1)
      let newLikes = pseudoLikes + 1;
      await updatePromptLikes({newLikes, id})
    }
    return;
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

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {updatePromptLikes})(PromptItem);