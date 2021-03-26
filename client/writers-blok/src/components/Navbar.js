import React from 'react';

const Navbar = () => {
  return(
    <div className="navbar">
      <div className="logo">
        Writer's BLOK
      </div>
      <div className="nav-links">
        <a href='/' className="nav-tags">Browse</a>
        <a href='/' className="nav-tags">Create</a>
        <a href='/' className="nav-tags">Read</a>
        <a href='/' className="nav-tags">Login/Register</a>
      </div>
    </div>
  )
}

export default Navbar;