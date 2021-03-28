import React, { useState } from 'react';
import axios from 'axios';

const Auth = ({ buttonText, heading, register }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, username, password);
    
    axios.post('/api/auth/register', {
      email: email,
      username: username,
      password: password
    })
    .then(response => {
      console.log(response)
      if(response.data){
        console.log('successful registration')

      } else {
        console.log('Registration Error');

      }
    }).catch(error => {
      console.log('Servor Error')
      console.log(error);
    })
  }

  return(
    <div>
      <h3>{heading}</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        {register && (
              <div>
                <label htmlFor="email"></label>
                <input className="input" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} value={email} required placeholder="Enter Email" />
              </div>
            )}
          <div>
              <label htmlFor="username"></label>
              <input className="input" type="text" id="username" name="username" required onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Enter Username" />
            </div>
            <div>
              <label htmlFor="password"></label>
              <input className="input" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} value={password} required placeholder="Enter Password" />
            </div>
           
        <button className="save-button">{buttonText}</button>
      </form>
    </div>
  )
}

export default Auth;