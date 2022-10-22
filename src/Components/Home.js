import React from "react";
import JoblyApi from "../api.js";

function Home() {
  // Need to know if logged in

  async function getAllJobs() {
    let jobs = await JoblyApi.getAllJobs();
    console.log(jobs);
  }
  return (
    <div>
      <div></div>
      <div>
        <p>Logged Out</p>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        <button>Log in</button>
        <button onClick={getAllJobs}>Sign Up</button>
      </div>
      <div>
        <p>Logged In</p>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        <h2>Welcome Back *UserName Placeholder</h2>
      </div>
    </div>
  );
}

export default Home;
