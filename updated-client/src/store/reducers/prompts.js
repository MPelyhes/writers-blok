import { LOAD_PROMPTS } from "../actionTypes";

const prompts = (state = [], action) => {
  switch (action.type){
    case LOAD_PROMPTS:
      return [...action.prompts];
    default:
      return state;
  }
};

export default prompts;