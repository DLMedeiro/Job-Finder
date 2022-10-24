import React, { useContext } from "react";
// import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import UserContext from "./UserContext";

function NavBar({ logout }) {
  const user = useContext(UserContext);
  return (
    // Logged In
    <div>
      {user.username ? (
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
                <NavLink to="/" onClick={logout}>
                  Log out {user.username}
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </div>
      ) : (
        <div>
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
      )}
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
