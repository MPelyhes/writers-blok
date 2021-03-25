import React from 'react';

const Register = () => {

  return(
    <div>
      <form action="/register" method="POST" class="validated-form" novalidate>
          <div>
            <label class="form-label" for="username">Username</label>
            <input class="form-control" type="text" id="username" name="username" required />
            </div>
            <div class="col-md-6 offset-md-3">
              <label class="form-label" for="email">Email</label>
              <input class="form-control" type="email" id="email" name="email" required />
            </div>
        <div class="col-md-6 offset-md-3">
            <label class="form-label" for="password">Password</label>
            <input class="form-control" type="password" id="password" name="password" required />
        </div>
        <button class="user-btn col-md-6 offset-md-3 mt-3">Register</button>
      </form>
    </div>
  )
}

export default Register;