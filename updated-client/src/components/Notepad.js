import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { submitPost } from "../store/actions/posts"
import NotepadTitle from "./NotepadTitle";
import Alert from "./Alert";


const Notepad = ({ currentUser, prompt, submitPost, errors }) => {
  //The post state is used to track user input on the notepad, and is passed along on submit
  const [post, setPost] = useState("");

  const history = useHistory();
  const title = prompt;
  const {id} = currentUser.user;
  
  //if the user does not have a selected prompt and something writtend in the notepad, we flash an alert
  //Otherwise, we submit their post and redirect them to the posts page in the main component
  const handleSubmit = async () => {
    console.log("clicked")
    if(!post.length || !title.length){
      {Alert("Hmmm...", "It looks like you haven't written anything, yet.")};
      return
    }
    await submitPost({id, title, post}).then(()=> {
      history.push("/posts");
      setPost("");
      console.log("We posted it! Nice!") 
      {Alert("Success!", "Your post has been saved. You can revisit previous posts by clicking the posts link.")}
    }).catch((err) => {
      return;
    })
  }

  //handleScroll helps us out if the user is using the app in mobile. It scolls them to the top of the page
  //after they have clicking the submit button or login button
  const handleScroll = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  }

  if(!currentUser){
    window.Intercom("boot", {
      app_id: "pddzazn3",
   });
  } else {
    window.Intercom("boot", {
      app_id: "pddzazn3",
      name: `${currentUser.username}`, // Full name
      email: `${currentUser.email}`, // Email address
    });
  }

  return (
    <div className="notepad">
      {errors.message && <div className="error">{errors.message}</div>}
      {<NotepadTitle prompt={prompt} />}
      <textarea name="post" rows="40" cols="50" placeholder="Select a prompt to begin your writing warm-up" onChange={(e) => setPost(e.target.value)} value={post}></textarea>
      {(currentUser.isAuthenticated && prompt) && (
        <button type="submit" className="save-button" onClick={handleSubmit}>Save</button> 
      )}
      {!currentUser.isAuthenticated && (
        <Link to='/login' className="save-button" onClick={handleScroll}>Login to Save</Link>
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