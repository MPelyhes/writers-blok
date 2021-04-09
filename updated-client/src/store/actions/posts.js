import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_POSTS } from "../actionTypes"

export const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  posts
});

export const fetchPosts = (id) => {
  //Need to actually figure out how we are getting this id here
  // console.log(id)
  return dispatch =>{
    // Need to add an id to a route to only get the posts for one specific user
    return apiCall("get", `/api/posts/${id}`).then(function(res) {
      dispatch(loadPosts(res));
    })
    .catch(function(err) {
      dispatch(addError(err.message))
    });
  };
};

export const submitPost = (post) => (dispatch) => {
  // console.log(post)
  let {id} = post;
  // console.log(id);
  return apiCall("post", `/api/posts/${id}`, post).then(res => {})
  .catch(err => dispatch(addError(err.message)));
}

export const deletePost = (post) => (dispatch) => {
  console.log(post)
  let {userId} = post;
  return apiCall("put", `/api/posts/${userId}`, {post}).then(res => {})
  .catch(err => dispatch(addError(err.message)));
}