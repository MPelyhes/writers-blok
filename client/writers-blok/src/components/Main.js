import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { connect } from "react-redux";
import Prompt from './Prompt';
import Navbar from './Navbar';
import CreatePrompt from './CreatePrompt';
import Auth from './Auth';
import { authUser } from '../actions/auth';
import history from '../history';

const Main = ({ authUser }) => {
  return (
    <div className="main">
      <Router history={history} >
      <Navbar />
        <Switch >
          <Route exact path="/" component={Prompt} />
          <Route exact path="/prompts" component={Prompt} />
          <Route exact path="/prompts/new" component={CreatePrompt} />
          <Route exact path="/login">
            <Auth 
              onAuth={authUser}
              buttonText="Login"
              heading ="Welcome Back"
            />
          </Route>
          <Route exact path="/register">
            <Auth 
              onAuth={authUser}
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

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps, {authUser})(Main);