import React from 'react';

const Navbar = () => {
  return(
    <div className='navbar'>
      <div className='logo'>
        Writer's BLOK
      </div>
      <div className='nav-links'>
        <a href='/'>Browse</a>
        <a href='/'>Create</a>
        <a href='/'>Read</a>
        <a href='/'>Login/Register</a>
      </div>
    </div>
  )
}

export default Navbar;