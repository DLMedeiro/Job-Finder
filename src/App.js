import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JoblyApi from "./api.js";
import UserContext from "./Components/UserContext";
import Toast from "./Components/Toast";
import "./Components/Toast.css";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState({});
  const [error, setError] = useState("");

  // Errors

  // Login function
  async function login(data, username) {
    let res = await JoblyApi.loginUser(data);
    if (res) {
      let user = await JoblyApi.loggedInUser(username);
      setToken(res);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", JSON.stringify(res));
      new Toast({
        message: `Welcome ${user.firstName}`,
        type: "success",
      });
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
    new Toast({
      message: `Logout Complete`,
      type: "success",
    });
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
      setError("incorrect password provided");
    } else {
      let updatedInfo = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
      };
      await JoblyApi.updateUser(currentUser.username, updatedInfo);
      let user = await JoblyApi.loggedInUser(currentUser.username);
      localStorage.setItem("user", JSON.stringify(user));
      setCurrentUser(JSON.parse(localStorage.getItem("user")));
    }
  }

  async function apply(id) {
    let confirmation = await JoblyApi.applyJob(currentUser.username, id);
    let user = await JoblyApi.loggedInUser(currentUser.username);
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
