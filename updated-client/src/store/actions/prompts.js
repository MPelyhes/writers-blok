import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_PROMPTS, REMOVE_POMPT } from "../actionTypes";

export const loadPrompts = (prompts) => ({
  type: LOAD_PROMPTS,
  prompts
});

export const fetchPrompts = () => {
  return dispatch => {
    return apiCall("get", "/api/prompt").then(function(res) {
      dispatch(loadPrompts(res));
    })
    .catch(function(err) {
      dispatch(addError(err.message))
    });
  };
};

export const postPrompt = (prompt) => (dispatch) => {
  console.log(prompt)
  return apiCall("post", `/api/prompt`, prompt).then((res) => {})
  .catch((err) => dispatch(addError(err.message)));
}


