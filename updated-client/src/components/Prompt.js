import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchPrompts } from "../store/actions/prompts";
import PromptItem from "./PromptItem";


const Prompt = ({ fetchPrompts, prompts, onPromptSelect }) => {

  useEffect(()=> {
    fetchPrompts()
  }, []);
 console.log(prompts)

  let promptList = prompts.map(p => {
    return <PromptItem 
      key={p._id}
      onPromptSelect={onPromptSelect}
      text={p.prompt}
      title={p.title}
      author={p.author}
    />
  })

  return (
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