import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrompts } from "../store/actions/prompts";
import PromptItem from "./PromptItem";


const Prompt = ({ fetchPrompts, prompts, onPromptSelect, selectedPrompt }) => {

  useEffect(()=> {
    fetchPrompts()
  }, []);
 console.log(prompts)

  let promptList = prompts.map(p => {
    return <PromptItem 
      key={p._id}
      onPromptSelect={onPromptSelect}
      selectedPrompt={selectedPrompt}
      text={p.prompt}
      title={p.title}
      author={p.author}
    />
  })

  return (
    <div>
      <h3>Select a Prompt</h3>
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