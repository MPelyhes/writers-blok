import React, {useState} from "react"

const CharacterCounter = ( {maxChar, currentStr, setValid }) => {
  console.log(maxChar, currentStr.length, setValid)
  let remainingChars =  maxChar - currentStr.length;
  if(remainingChars < 0){
    setValid(false);
  } else {
    setValid(true)
  }
  return(
    <div className="character-alert">Characters Remaining <div className={remainingChars >= 0 ? "character-alert-positive" : "character-alert-negative"}>{remainingChars}</div></div>
  );
};

export default CharacterCounter;