import React, { useState} from "react";

const AuthForm = ({ buttonText, signUp, heading, onAuth }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const authType = signUp ? "signup" : "signin";
    onAuth(authType, {email, username, password}).then(() => {
      console.log("LOGGED IN!");
    });
  };

  return(
    <div>
      <h3>{heading}</h3>
      <form className="form-container" onSubmit={handleSubmit}>
        {signUp && (
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
           
        <button type="submit" className="save-button">{buttonText}</button>
      </form>
    </div>
  )
}

export default AuthForm;
