import React, { useContext } from "react";
import UserContext from "./UserContext";

function Home() {
  const user = useContext(UserContext);
  return (
    <div>
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
          <button>Log in</button>
          <button>Sign Up</button>
        </div>
      )}
    </div>
  );
}

export default Home;
