import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";


const Navbar = ({ currentUser }) => {
  console.log(currentUser.user)

 const authLink = () =>{
  if(!currentUser.isAuthenticated){
    return <Link to='/login' className="nav-tags">Login/Register</Link>
  }
  return <Link to='/login' className="nav-tags">Logout</Link>
 } 
  return(
    <div className="navbar">
      <div className="logo">
        <Link to='/home' className="logo-link">Writer's BLOK</Link>
      </div>
      <div className="nav-links">
        <Link to='/prompts' className="nav-tags">Browse</Link>
        <Link to='/prompts/new' className="nav-tags">Create</Link>
        <Link to='/' className="nav-tags">Read</Link>
        {authLink()}
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(Navbar);
