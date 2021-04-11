import React, {useState, useEffect} from "react";
import Typed from 'react-typed';

const NotepadTitle = ({ prompt }) => {
 const [title, setTitle] = useState("Title")
 const [key, setKey] = useState(1); //We use a key to force a re-render of the entire h1 element when the prompt changes

 useEffect(() => {
   if(prompt){
     setTitle(prompt);
     let value = key + 1;
     setKey(value); // we add 1 to the key so that it changes forcing the h1 to re-render
     console.log(key)
   }
 }, [prompt]);

  
  // returns a typed title with each selected prompt change
  const typedTitle =() => {
    return <h1 key={key}><Typed strings={[`${title}`]} typeSpeed={30} showCursor={false} /></h1>
  }

  return(
    <div className={prompt ? "title" : "title"}>
    {typedTitle()}<span className="blinking-cursor">{!prompt ? "|" : ""}</span>
  </div>
  )
}

export default NotepadTitle;
