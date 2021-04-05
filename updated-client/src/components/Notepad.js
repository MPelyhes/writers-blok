import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { submitPost } from "../store/actions/posts"


const Notepad = ({ currentUser, prompt, submitPost, errors }) => {
  
  const [post, setPost] = useState("");

  const history = useHistory();
  const title = prompt;
  const {id} = currentUser.user;
  
  const handleSubmit = async (e) => {
    console.log("clicked")
    await submitPost({id, title, post}).then(()=> {
      history.push("/");
      console.log("We posted it! Nice!")
    }).catch((err) => {
      return;
    })
  }

  return (
    <div className="notepad">
      <div className="title">
        <h1>{prompt || "Title"}</h1><span className="blinking-cursor">|</span>
      </div>
      <textarea name="post" rows="40" cols="50" placeholder="Select a prompt to begin your writing warm-up" onChange={(e) => setPost(e.target.value)}></textarea>
      {currentUser.isAuthenticated && (
        <button type="submit" className="save-button" onClick={handleSubmit}>Save</button> 
      )}
      {!currentUser.isAuthenticated && (
        <Link to='/login' className="save-button">Login to Save</Link>
      )}
      
    </div>
  )
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, {submitPost})(Notepad);