import React from "react";
import JoblyApi from "../api.js";

function Home() {
  // Need to know if logged in

  // async function searchCompanies() {
  //   let company = await JoblyApi.searchCompanies("carr");
  //   console.log(company);
  // }
  return (
    <div>
      <div></div>
      <div>
        <p>Logged Out</p>
        <h1>Jobly</h1>
        <h4>All the jobs in one, convenient place.</h4>
        <button>Log in</button>
        <button>Sign Up</button>
        {/* <button onClick={searchCompanies}>Sign Up</button> */}
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
