import React from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";

function NavBar() {
  // Need to know if logged in
  return (
    // Logged In
    <div>
      <Navbar expand="md">
        <NavLink exact to="/" className="navbar-brand">
          Jobly
        </NavLink>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/companies">Companies</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/jobs">Jobs</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/profile">Profile</NavLink>
          </NavItem>
        </Nav>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink to="/">Log out</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
      {/* TEMPORARY */}
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/Login">Login</NavLink>
        </NavItem>
      </Nav>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/signup">Sign Up</NavLink>
        </NavItem>
      </Nav>
    </div>

    // Logged out
    //   <div>
    //   <Navbar expand="md">
    //     <NavLink exact to="/" className="navbar-brand">
    //       Jobly
    //     </NavLink>
    //     <Nav className="ml-auto" navbar>
    //       <NavItem>
    //         <NavLink to="/Login">Login</NavLink>
    //       </NavItem>
    //     </Nav>
    //     <Nav className="ml-auto" navbar>
    //       <NavItem>
    //         <NavLink to="/signup">Sign Up</NavLink>
    //       </NavItem>
    //     </Nav>
    //   </Navbar>
    // </div>
  );
}

export default NavBar;
