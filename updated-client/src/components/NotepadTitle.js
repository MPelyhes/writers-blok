import React, {useState, useEffect} from "react";
import shortid from "shortid";
import Typed from 'react-typed';

const NotepadTitle = ({ prompt }) => {
 const [title, setTitle] = useState("Title")

 useEffect(() => {
   if(prompt){
     setTitle(prompt);
   }
 }, [prompt]);

  //The random key ensures that the title rerenders and plays the animation with each change of the selected prompt
  const getRandomKey = () => {
    return shortid.generate();
}

  // returns a typed title with each selected prompt change
  const typedTitle =() => {
    return <h1 key={getRandomKey()}><Typed strings={[`${title}`]} typeSpeed={30} showCursor={false} /></h1>
  }

  return(
    <div className={prompt ? "title" : "title"}>
    {typedTitle()}<span className="blinking-cursor">{!prompt ? "|" : ""}</span>
  </div>
  )
}

export default NotepadTitle;
