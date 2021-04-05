import { combineReducers } from "redux";
import currentUser from "./currentUser";
import errors from "./errors";
import prompts from "./prompts";
import posts from "./posts";

const rootReducer = combineReducers({
  currentUser,
  errors,
  prompts,
  posts
});

export default rootReducer;
