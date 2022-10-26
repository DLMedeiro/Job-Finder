import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Companies from "./Companies";
import CompanyJobs from "./CompanyJobs";
import Jobs from "./Jobs";
import Profile from "./Profile";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import UserContext from "./UserContext";

function Routes({ login, registerNewUser, update, apply, error }) {
  const user = useContext(UserContext);

  return (
    <>
      {user.username ? (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/companies">
            <Companies />
          </Route>
          <Route exact path="/companies/:handle">
            <CompanyJobs apply={apply} />
          </Route>
          <Route exact path="/jobs">
            <Jobs apply={apply} />
          </Route>
          <Route exact path="/profile">
            <Profile login={login} update={update} />
          </Route>
          <Route exact path="/login">
            <LoginForm login={login} error={error} />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>
          <Route exact path="/signup">
            <SignupForm registerNewUser={registerNewUser} />
          </Route>
          <Route path="*">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default Routes;
