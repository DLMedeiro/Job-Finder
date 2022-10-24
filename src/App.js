import React, { useState, useEffect } from "react";
import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter, Redirect } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JoblyApi from "./api.js";
import UserContext from "./Components/UserContext";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  const [token, setToken] = useState({});

  async function login(data, username) {
    let token = await JoblyApi.login(data);
    if (token) {
      let user = await JoblyApi.loggedInUser(username);
      setToken(token);
      localStorage.setItem("item", JSON.stringify(user));
    }
  }

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("item"))) {
      setCurrentUser(JSON.parse(localStorage.getItem("item")));
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

  // Use context for logged in and pass down
  return (
    <div>
      <UserContext.Provider value={currentUser}>
        <BrowserRouter>
          <NavBar logout={logout} />
          <Routes login={login} registerNewUser={registerNewUser} />
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
