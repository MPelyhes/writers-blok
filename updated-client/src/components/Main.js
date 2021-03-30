import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import AuthForm from "./AuthForm";
import Prompt from "./Prompt"
import { authUser } from "../store/actions/auth";

const Main = props => {
  const { authUser } = props;
  return (
    <div className="main">
      <Switch>
        <Route exact path="/" component={Prompt} />
        <Route exact path="/prompts" component={Prompt} />
        <Route exact path="/signin">
          <AuthForm
            onAuth={authUser}
            buttonText="Log in"
            heading="Welcome Back."
          />
        </Route>
        <Route exact path="/signup">
           <AuthForm
              signUp
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
    errors: state.errors
  };
}

export default withRouter(connect(mapStateToProps, { authUser })(Main));
