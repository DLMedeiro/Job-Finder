import React from "react";

function Home({ currentUser }) {
  return (
    <div>
      <div>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
      </div>
      {currentUser ? (
        <div>
          <h2>Welcome Back {currentUser}</h2>
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
