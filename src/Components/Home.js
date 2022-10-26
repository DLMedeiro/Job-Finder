import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Button } from "reactstrap";
import { Link } from "react-router-dom";

function Home() {
  const user = useContext(UserContext);
  return (
    <div className="container">
      <div>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
      </div>
      {user.username ? (
        <div>
          <h2>Welcome Back {user.firstName}</h2>
        </div>
      ) : (
        <div>
          <Link to={"/login"}>
            <Button style={{ margin: "15px" }}>Log in</Button>
          </Link>
          <Link to={"/signup"}>
            <Button>Sign Up</Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Home;
