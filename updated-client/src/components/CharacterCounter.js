import React from "react"

const CharacterCounter = ( maxChar, currentStr) => {
  
  let remainingChars =  maxChar - currentStr.length
  return(
    <div className="character-alert">Characters Remaining <div className={remainingChars >= 0 ? "character-alert-positive" : "character-alert-negative"}>{remainingChars}</div></div>
  );
};

export default CharacterCounter;