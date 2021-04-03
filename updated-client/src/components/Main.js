import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "./AuthForm";
import Prompt from "./Prompt"
import { authUser } from "../store/actions/auth";
import Navbar from "./Navbar"
import CreatePrompt from "./CreatePrompt";
import Home from "./Home";
import { removeError } from "../store/actions/errors";

const Main = ({ authUser, errors, removeError, currentUser }) => {
  return (
    <div className="main">
      <Navbar currentUser={currentUser} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/prompts" component={Prompt} />
        <Route exact path="/prompts/new"> 
        <CreatePrompt 
          currentUser={currentUser}
        />
        </Route>
        <Route exact path="/login">
          <AuthForm
            removeError={removeError}
            errors={errors}
            login
            onAuth={authUser}
            buttonText="Log in"
            heading="Welcome Back."
          />
        </Route>
        <Route exact path="/register">
           <AuthForm
              removeError={removeError}
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

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));
