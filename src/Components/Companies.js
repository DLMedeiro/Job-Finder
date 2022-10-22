import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api.js";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  async function searchFunction(search) {
    let results = await JoblyApi.search("companies", search);
    setSearchResults(results);
    // console.log(results);
  }
  // console.log(searchResults);

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
      {searchResults.length === 0 ? (
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
        <div>
          {searchResults.map((result) => (
            <CompanyCard
              key={result.handle}
              handle={result.handle}
              title={result.name}
              logo={result.logoUrl}
              description={result.description}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Companies;
