import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./Components/Routes";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
