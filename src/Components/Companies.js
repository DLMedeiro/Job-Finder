import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api.js";

function Companies() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function getAllCompanies() {
      let companies = await JoblyApi.getAllCompanies();
      setCompanies(companies);
    }
    getAllCompanies();
  }, []);
  return (
    <div>
      <h1>This is the Companies Page</h1>
      <SearchForm />
      {companies.map((company) => (
        <CompanyCard
          key={company.handle}
          handle={company.handle}
          title={company.name}
          logo={company.logoUrl}
          description={company.description}
        />
      ))}
    </div>
  );
}

export default Companies;
