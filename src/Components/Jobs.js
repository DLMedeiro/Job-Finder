import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyApi from "../api.js";

function Jobs() {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(false);

  async function searchFunction(search) {
    let results = await JoblyApi.searchJobs(search);
    if (results.length === 0) {
      setError(true);
    }
    setJobs(results);
  }

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
      <SearchForm searchFunction={searchFunction} />
      {!error ? (
        <div>
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
      ) : (
        <p>Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default Jobs;
