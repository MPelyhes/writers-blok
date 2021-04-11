import React, {useState} from "react"

const CharacterCounter = ( {maxChar, currentStr, setValid }) => {
  //the character counter takes in three props, the maximum number of characters that a string can be and still be valid,
  //the current string that is being evaluated, and a setValid state function to set the string as invalid. If the string is
  //invalid then the form will not be able to submit, and the character counter will turn red

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