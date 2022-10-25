import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import JoblyApi from "../api.js";

function Jobs({ apply }) {
  const { handle } = useParams();
  const [company, setCompany] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function getCompany(handle) {
      let company = await JoblyApi.getCompany(handle);
      setCompany(company);
      setJobs(company.jobs);
    }
    getCompany(handle);
  }, []);

  return (
    <div>
      <h1>{company.name}</h1>
      <h4>{company.description}</h4>

      {jobs.map((job) => (
        <JobCard
          key={job.id}
          id={job.id}
          title={job.title}
          companyName={job.companyName}
          salary={job.salary}
          equity={job.equity}
          apply={apply}
        />
      ))}
    </div>
  );
}

export default Jobs;
