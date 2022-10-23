import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyJobs from "./CompanyJobs";
import Jobs from "./Jobs";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import SignupForm from "../SignupForm";

function Routes({ login, currentUser }) {
  // Need to know if logged in
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home currentUser={currentUser} />
        </Route>
        {currentUser ? (
          <>
            <Route exact path="/login">
              <Redirect to="/companies" />
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
              <Profile />
            </Route>
          </>
        ) : (
          <>
            <Route exact path="/login">
              <LoginForm login={login} currentUser={currentUser} />
            </Route>
            <Route exact path="/signup">
              <SignupForm />
            </Route>
          </>
        )}
      </Switch>
    </>
  );
}

export default Routes;
