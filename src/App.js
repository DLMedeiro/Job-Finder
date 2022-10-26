import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JoblyApi from "./api.js";
import UserContext from "./Components/UserContext";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState({});
  const [error, setError] = useState("");

  // Login function
  async function login(data, username) {
    let res = await JoblyApi.loginUser(data);
    if (res) {
      let user = await JoblyApi.loggedInUser(username);
      setToken(res);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(res));
    } else {
      setError("Incorrect name or password");
      console.log(error);
    }
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("user"))) {
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
    }
  }, [token]);

  async function logout() {
    localStorage.clear();
    setCurrentUser({});
  }

  async function registerNewUser(data) {
    let newUserToken = await JoblyApi.registerUser(data);
    if (newUserToken) {
      let newUser = {
        username: data.username,
        password: data.password,
      };
      login(newUser, data.username);
    }
  }

  // Update user information
  async function update(userData) {
    let userCheck = {
      username: currentUser.username,
      password: userData.password,
    };
    let testToken = await JoblyApi.loginUser(userCheck);
    if (!testToken) {
      console.log("incorrect password provided");
    } else {
      let updatedInfo = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      };
      await JoblyApi.updateUser(currentUser.username, updatedInfo);
      setCurrentUser({});
      login(userCheck, currentUser.username);
    }
  }

  async function apply(id, username) {
    let confirmation = await JoblyApi.applyJob(username, id);
    let user = await JoblyApi.loggedInUser(username);
    localStorage.setItem("user", JSON.stringify(user));
    setCurrentUser(JSON.parse(localStorage.getItem("user")));
    console.log(confirmation);
  }

  return (
    <div>
      <UserContext.Provider value={currentUser}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <Routes
            login={login}
            registerNewUser={registerNewUser}
            update={update}
            apply={apply}
            error={error}
          />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
