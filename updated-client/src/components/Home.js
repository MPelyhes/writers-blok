import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="home-container">
      <h1>Writing Warm-Ups Simplified</h1>
      <h3>Browse writing prompts to spark your creativity</h3>
      <h3>Share your prompts with the <span className="small-logo">Writer's BLOK</span> community</h3>
      <h3>Post and save all of your warm-ups in one location</h3>
      <div className="home-button">
        <Link to="/prompts" className="save-button">Start Writing!</Link>
      </div>
    </div>
  )
}

export default Home;