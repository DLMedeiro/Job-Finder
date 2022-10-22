import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api.js";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(false);

  async function searchFunction(search) {
    let results = await JoblyApi.searchCompanies(search);
    if (results.length === 0) {
      setError(true);
    }
    setCompanies(results);
  }

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
      <SearchForm searchFunction={searchFunction} />
      {!error ? (
        <div>
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
      ) : (
        <p>Sorry, no results were found!</p>
      )}
    </div>
  );
}

export default Companies;
