import React from "react";
import shortid from "shortid";

const NotepadTitle = ({ prompt }) => {
 
  //The random key ensures that the title rerenders and plays the animation with each change of the selected prompt
  const getRandomKey = () => {
    return shortid.generate();
}

  const title = () =>{
    return <h1 className="animate__animated animate__flipInX" key={getRandomKey()}>{prompt|| "Title"}</h1>
  }

  return(
    <div className={prompt ? "title" : "title"}>
    {title()}<span className="blinking-cursor">{!prompt ? "|" : ""}</span>
  </div>
  )
}

export default NotepadTitle;
