import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrompts } from "../store/actions/prompts";
import PromptItem from "./PromptItem";


const Prompt = ({ fetchPrompts, prompts, onPromptSelect, selectedPrompt }) => {
  useEffect(()=> {
    fetchPrompts()
  }, []);

  let promptList = prompts.map(p => {
    return <PromptItem 
      key={p._id}
      onPromptSelect={onPromptSelect}
      selectedPrompt={selectedPrompt}
      text={p.prompt}
      title={p.title}
      likes={p.likes}
      id={p._id}
      author={p.author}
    />
  })

  return (
    <div>
      <h3>Select a Prompt</h3>
      <div className="sort-container">
        <div className="sort-title">Sort By <span className="colon">:</span></div>
        <div className="sort-options-container">
          <div className="sort-option sort-option-selected">Newest</div>
          <div className="sort-option">Most<span> </span>Popular</div>
        </div>
      </div>
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