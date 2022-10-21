import React from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";

function Companies() {
  return (
    <div>
      <h1>This is the Companies Page</h1>
      <SearchForm />
      {/* Map over companies and input data into company card */}
      <CompanyCard
        title="Title Placeholder"
        logo="Logo Placeholder"
        description="Description Placeholder"
      />
    </div>
  );
}

export default Companies;
