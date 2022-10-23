import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JoblyApi from "./api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  // const [token, setToken] = useState({});

  async function login(data, username) {
    let token = await JoblyApi.login(data);
    if (token) {
      // setToken(token);
      let user = await JoblyApi.loggedInUser(username);
      // setCurrentUser(user);
      localStorage.setItem("item", JSON.stringify(user));
      setCurrentUser(JSON.parse(localStorage.getItem("item")));
    }
  }

  async function logout() {
    localStorage.clear();
    setCurrentUser({});
  }

  // Use context for logged in and pass down
  return (
    <div>
      <BrowserRouter>
        <NavBar logout={logout} currentUser={currentUser.firstName} />
        <Routes login={login} currentUser={currentUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
