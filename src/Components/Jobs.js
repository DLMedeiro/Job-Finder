import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyApi from "../api.js";

function Jobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getAllJobs() {
      let jobs = await JoblyApi.getAllJobs();
      setJobs(jobs);
    }
    getAllJobs();
  }, []);

  return (
    <div>
      <h1>This is the Jobs Page</h1>
      <SearchForm />
      {/* Map over Jobs and input data into job card */}
      {jobs.map((job) => (
        <JobCard
          key={job.id}
          title={job.title}
          companyName={job.companyName}
          salary={job.salary}
          equity={job.equity}
        />
      ))}
    </div>
  );
}

export default Jobs;
