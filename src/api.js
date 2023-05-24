import axios from "axios";
import Toast from "./Components/Toast";
import "./Components/Toast.css";

const BASE_URL =
  "https://jobfinder-backend-b8fv.onrender.com" || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {
  // the token for interactive with the API will be stored here.
  static token;

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    //there are multiple ways to pass an authorization token, this is how you pass it in the header.
    //this has been provided to show you another way to pass the token. you are only expected to read this code for this project.
    // const url = `${BASE_URL}/${endpoint}`;
    let url = new URL(endpoint, BASE_URL);
    // Use url constructor here
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    console.log(headers);
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      new Toast({ message: message, type: "danger" });
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  // log in a user
  static async loginUser(loginData) {
    let res = await this.request(`auth/token`, loginData, "post");
    console.log(`res=${res}`);

    JoblyApi.token = res.token;
    localStorage.setItem("headToken", JSON.stringify(JoblyApi.token));

    return JoblyApi.token;
  }

  // Pull user information after login
  static async loggedInUser(username) {
    let res = await this.request(`users/${username}`);
    return res.user;
  }

  // Create a new user
  static async registerUser(newUserData) {
    let res = await this.request(`auth/register`, newUserData, "post");
    return res.token;
  }

  // Update user
  static async updateUser(username, updatedData) {
    let res = await this.request(`users/${username}`, updatedData, "patch");
    return res;
  }

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  // Get all companies - (future update) pull 10 at a time?
  static async getAllCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }
  // Get searchable companies - (future update) pull 10 at a time?
  static async searchCompanies(criteria) {
    let res = await this.request(`companies/?name=${criteria}`);
    return res.companies;
  }
  // Get searchable jobs - (future update) pull 10 at a time?
  static async searchJobs(criteria) {
    let res = await this.request(`jobs/?title=${criteria}`);
    return res.jobs;
  }

  // Get all jobs - (future update) pull 10 at a time?
  static async getAllJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  // Apply for a job
  static async applyJob(username, id) {
    // Work around for header being cleared on page reload, preventing apply function from working
    if (localStorage.length >= 0) {
      if (JoblyApi.token === undefined) {
        JoblyApi.token = JSON.parse(localStorage.getItem("headToken"));
      }
    }
    let res = await this.request(`users/${username}/jobs/${id}`, {}, "post");
    if (res) {
      console.log(res);
    } else {
      console.log("already applied");
    }
  }
}

// for now, put token ("testuser" / "password" on class)
// JoblyApi.token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
//   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
//   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";

export default JoblyApi;
