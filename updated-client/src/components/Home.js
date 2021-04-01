import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <h3>Writing Warm-Ups Simplified</h3>
      <h4>Browse writing prompts to spark your creativity</h4>
      <h4>Share your prompts with the <span className="small-logo">Writer's BLOK</span> community</h4>
      <h4>Post and save all of your warm-ups in one location</h4>
      <div className="home-button">
        <Link to="/prompts" className="save-button">Start Writing!</Link>
      </div>
    </div>
  )
}

export default Home;