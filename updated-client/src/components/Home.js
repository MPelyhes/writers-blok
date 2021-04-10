import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faHandHolding, faPen } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
  return (
    <div className="home-container">
      <h3>Writing Warm-Ups Simplified</h3>
      <div className="headers-container">
        <h4><FontAwesomeIcon icon={faBookOpen} className="icon" /> Browse writing prompts to spark your creativity</h4>
        <h4><FontAwesomeIcon icon={faHandHolding} className="icon hand"  /> Share prompts with the <span className="small-logo">Writer's BLOK</span> community</h4>
        <h4><FontAwesomeIcon icon={faPen} className="icon" /> Post and save all of your warm-ups in one location</h4>
      </div>
      <div className="home-button">
        <Link to="/prompts" className="save-button">Start Writing!</Link>
      </div>
    </div>
  )
}

export default Home;