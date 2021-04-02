import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_PROMPTS, REMOVE_POMPT } from "../actionTypes";

export const loadPrompts = (prompts) => ({
  type: LOAD_PROMPTS,
  prompts
});

export const fetchPrompts = () => {
  return dispatch => {
    return apiCall("GET", "/api/prompt").then(res => dispatch(loadPrompts(res).catch(err => addError(err.message))))
  }
}