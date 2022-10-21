import React from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";

function Jobs() {
  return (
    <div>
      <h1>This is the Jobs Page</h1>
      <SearchForm />
      {/* Map over Jobs and input data into job card */}
      <JobCard
        title="Title Placeholder"
        companyName="CompanyName Placeholder"
        salary="Salary Placeholder"
        equity="Equity Placeholder"
      />
    </div>
  );
}

export default Jobs;
