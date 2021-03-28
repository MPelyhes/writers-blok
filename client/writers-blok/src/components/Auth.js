import React, { useState } from 'react';

const Auth = () => {

  return(
    <div>
      <form className="form-container">
          <div>
            <label htmlFor="username"></label>
            <input className="input" type="text" id="username" name="username" required placeholder="Enter Username" />
            </div>
            <div>
              <label htmlFor="email"></label>
              <input className="input" type="email" id="email" name="email" required placeholder="Enter Email" />
            </div>
        <div>
            <label htmlFor="password"></label>
            <input className="input" type="password" id="password" name="password" required placeholder="Enter Password" />
        </div>
        <button className="save-button">Register</button>
      </form>
    </div>
  )
}

export default Auth;