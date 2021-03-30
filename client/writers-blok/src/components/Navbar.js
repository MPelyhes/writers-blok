import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="logo">
        Writer's BLOK
      </div>
      <div className="nav-links">
        <Link to='/prompts' className="nav-tags">Browse</Link>
        <Link to='/prompts/new' className="nav-tags">Create</Link>
        <Link to='/' className="nav-tags">Read</Link>
        <Link to='/login' className="nav-tags">Login/Register</Link>
      </div>
    </div>
  )
}

export default Navbar;