import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import prompts from "./prompts";

const rootReducer = combineReducers({
  currentUser,
  errors,
  prompts
});

export default rootReducer;
