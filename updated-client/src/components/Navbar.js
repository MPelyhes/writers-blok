import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from  "../store/actions/auth";
import { useHistory } from "react-router";


const Navbar = ({ currentUser, logout }) => {
const history = useHistory();

 const clickLogout = () => {
   history.push("/home")
   logout();
 }

 const authLink = () =>{
  if(!currentUser.isAuthenticated){
    return <Link to='/login' className="nav-tags">Login/Register</Link>
  }
  return <Link onClick={clickLogout} className="nav-tags">Logout</Link>
 } 

 const userPosts = () => {
  if(currentUser.isAuthenticated){
    return <Link to='/posts' className="nav-tags">Posts</Link>
  }
 }

  return(
    <div className="navbar">
      <div className="logo">
        <Link to='/home' className="logo-link">Writer's BLOK</Link>
      </div>
      <div className="nav-links">
        <Link to='/prompts' className="nav-tags">Prompts</Link>
        <Link to='/prompts/new' className="nav-tags">Create</Link>
        {userPosts()}
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

export default connect(mapStateToProps, { logout })(Navbar);
