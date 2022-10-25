import React, { useContext } from "react";
import UserContext from "./UserContext";
import { Button } from "reactstrap";

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
          <Button style={{ margin: "15px" }}>Log in</Button>
          <Button>Sign Up</Button>
        </div>
      )}
    </div>
  );
}

export default Home;
