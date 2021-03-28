import React from 'react';
import { Switch, Route, Router, Redirect } from 'react-router-dom';
import Prompt from './Prompt';
import Navbar from './Navbar';
import CreatePrompt from './CreatePrompt';
import Auth from './Auth';
import history from '../history';

const Main = () => {
  return (
    <div className="main">
      <Navbar />
      <Router history={history} >
        <Switch >
          <Route exact path="/" component={Prompt} />
          <Route exact path="/prompts" component={Prompt} />
          <Route exact path="/prompts/new" component={CreatePrompt} />
          <Route exact path="/login">
            <Auth 
              buttonText="Login"
              heading ="Welcome Back"
            />
          </Route>
          <Route exact path="/register">
            <Auth 
              register
              buttonText="Register"
              heading ="Join Writer's BLOK"
            />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default Main;