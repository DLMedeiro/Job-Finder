import React, { useState, useContext } from "react";
import "../styles/NavBar.css";
import { NavLink } from "react-router-dom";
import UserContext from "./UserContext";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

function NavAppBar({ logout }) {
  const user = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar id="nav-bar">
      <NavLink id="nav-brand" to="/">
        JobFinder
      </NavLink>
      {/* <NavbarToggler id="nav-toggle" onClick={toggle} /> */}
      <div class="toggler-btn" onClick={toggle}>
        <div class="toggler-line"></div>
        <div class="toggler-line"></div>
        <div class="toggler-line"></div>
      </div>
      <Collapse isOpen={isOpen} navbar>
        {user.username ? (
          <Nav>
            <NavItem>
              <NavLink id="nav-link" to="/companies">
                Companies
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav-link" to="/jobs">
                Jobs
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav-link" to="/profile">
                Profile
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav-link" to="/" onClick={logout}>
                Log Out
              </NavLink>
            </NavItem>
          </Nav>
        ) : (
          <Nav>
            <NavItem>
              <NavLink id="nav-link" to="/Login">
                Login
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink id="nav-link" to="/signup">
                Sign Up
              </NavLink>
            </NavItem>
          </Nav>
        )}
      </Collapse>
    </Navbar>
  );
}

export default NavAppBar;
