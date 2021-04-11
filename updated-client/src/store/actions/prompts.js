import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_PROMPTS } from "../actionTypes";

export const loadPrompts = (prompts) => ({
  type: LOAD_PROMPTS,
  prompts
});

export const fetchPrompts = (sortSelect) => (dispatch) => {
    console.log(sortSelect)
    return apiCall("post", `/api/prompt/fetch`, sortSelect).then(function(res) {
      console.log("here3")
      dispatch(loadPrompts(res));
    })
    .catch(function(err) {
      dispatch(addError(err.message))
    });
};


export const postPrompt = (prompt) => (dispatch) => {
  console.log(prompt)
  return apiCall("post", `/api/prompt`, prompt).then(res => {})
  .catch(err => dispatch(addError(err.message)))
}

export const updatePromptLikes = (prompt) => (dispatch) => {
  console.log(prompt)
  return apiCall("put", `/api/prompt/${prompt.id}`, prompt).then(res => {})
  .catch(err => dispatch(addError(err.message)))
}

