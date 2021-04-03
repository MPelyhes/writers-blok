import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrompts } from "../store/actions/prompts";
import PromptItem from "./PromptItem";


const Prompt = ({ fetchPrompts, prompts }) => {

  useEffect(()=> {
    fetchPrompts()
  })

  let promptList = prompts.map(p => {
    return <PromptItem 
      key={p._id}
      text={p.text}
      title={p.title}
      author={p.author}
    />
  })

  return (
    // <div className="prompt-container">
    //   <h2>Title</h2>
    //   <div className="prompt">
    //     This is where a really cool description of the prompt would go! I would put lorem ipsum
    //     text here, but I forgot how to do that quickly using emmett. Oh well!
    //   </div>
    //   <div className="prompt-author">
    //     Submitted by <span className="colon">:</span> Matt Pelyhes
    //   </div>
    // </div>
    <div>
      {promptList}
    </div>
  )

}

function mapStateToProps(state) {
  return {
    prompts: state.prompts
  };
}

export default connect(mapStateToProps, { fetchPrompts })(Prompt);