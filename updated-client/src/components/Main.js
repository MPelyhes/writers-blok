import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "./AuthForm";
import Prompt from "./Prompt"
import { authUser } from "../store/actions/auth";
import Navbar from "./Navbar"
import CreatePrompt from "./CreatePrompt";
import Home from './Home';

const Main = ({ authUser, errors }) => {
  return (
    <div className="main">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/prompts" component={Prompt} />
        <Route exact path="/prompts/new" component={CreatePrompt} />
        <Route exact path="/login">
          <AuthForm
            errors={errors}
            login
            onAuth={authUser}
            buttonText="Log in"
            heading="Welcome Back."
          />
        </Route>
        <Route exact path="/register">
           <AuthForm
              errors={errors}
              register
              onAuth={authUser}
              buttonText="Sign me up!"
              heading="Join Writer's Blok"
            />
        </Route>
      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser
  };
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));
