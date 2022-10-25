import React, { useEffect, useState, useContext } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api.js";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  async function searchFunction(search) {
    let results = await JoblyApi.searchCompanies(search);
    if (results.length === 0) {
      setError(true);
    }
    setCompanies(results);
    setIsLoading(false);
  }

  useEffect(() => {
    async function getAllCompanies() {
      let companies = await JoblyApi.getAllCompanies();
      setCompanies(companies);
      setIsLoading(false);
    }
    getAllCompanies();
  }, []);

  if (isLoading) {
    return <p>Loading &hellip;</p>;
  }

  return (
    <div>
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
