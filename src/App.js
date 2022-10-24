import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JoblyApi from "./api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [currentUserData, setCurrentUserData] = useState({});
  // const [token, setToken] = useState({});

  async function login(data, username) {
    let token = await JoblyApi.login(data);
    if (token) {
      // setToken(token);
      console.log(username);
      let user = await JoblyApi.loggedInUser(username);
      // setCurrentUser(user);
      localStorage.setItem("item", JSON.stringify(user));
      setCurrentUser(JSON.parse(localStorage.getItem("item")));
    }
  }

  // useEffect(async function userData(username) {
  //   let user = await JoblyApi.loggedInUser(username);
  //   setCurrentUserData(user);
  // }),
  //   [currentUser];

  async function logout() {
    localStorage.clear();
    setCurrentUser({});
  }

  async function registerNewUser(data) {
    console.log(data);
    let newUserToken = await JoblyApi.registerUser(data);
    // login(data, data.username);
    if (newUserToken) {
      let newUser = {
        username: data.username,
        password: data.password,
      };
      login(newUser, data.username);
      // console.log(newUser);
    }
  }

  // Use context for logged in and pass down
  return (
    <div>
      <BrowserRouter>
        <NavBar logout={logout} currentUser={currentUser.firstName} />
        <Routes
          login={login}
          currentUser={currentUser}
          registerNewUser={registerNewUser}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
