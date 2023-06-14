import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JobCard from "./JobCard";
import JoblyApi from "../api.js";

import {
  Card,
  CardBody,
  Label,
  Input,
  Button,
  FormGroup,
  Form,
} from "reactstrap";

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
      <Card id="form-group-company">
        <CardBody>
          <h1>{company.name}</h1>
          <h4>{company.description}</h4>
        </CardBody>
      </Card>
      <div>
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
    </div>
  );
}

export default Jobs;
