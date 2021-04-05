import { LOAD_POSTS } from "../actionTypes";

const post = (state = [], action) => {
  switch (action.type){
    case LOAD_POSTS:
      return [...action.post];
    default:
      return state;
  }
};

export default post;