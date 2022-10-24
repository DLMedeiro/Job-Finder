import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyJobs from "./CompanyJobs";
import Jobs from "./Jobs";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

function Routes({ login, currentUser, registerNewUser }) {
  // Need to know if logged in
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home currentUser={currentUser.firstName} />
        </Route>
        <Route exact path="/companies">
          <Companies />
        </Route>
        <Route exact path="/companies/:handle">
          <CompanyJobs />
        </Route>
        <Route exact path="/jobs">
          <Jobs />
        </Route>
        <Route exact path="/profile">
          <Profile currentUser={currentUser} />
        </Route>
        <Route exact path="/login">
          <LoginForm login={login} currentUser={currentUser} />
        </Route>
        <Route exact path="/signup">
          <SignupForm registerNewUser={registerNewUser} />
        </Route>
      </Switch>
    </>
  );
}

export default Routes;
