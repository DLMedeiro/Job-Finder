import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import JoblyApi from "./api.js";

function App() {
  const [currentUser, setCurrentUser] = useState({});
  async function loginData(username) {
    let user = await JoblyApi.loggedInUser(username);
    setCurrentUser(user);
    console.log(user.username);
  }
  async function login(data, username) {
    let token = await JoblyApi.login(data);
    if (token) {
      loginData(username);
    }
  }
  // Use context for logged in and pass down
  return (
    <div>
      <BrowserRouter>
        <NavBar currentUser={currentUser.firstName} />
        <Routes login={login} currentUser={currentUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
