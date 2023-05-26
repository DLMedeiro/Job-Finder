import React, { useEffect, useState, useContext } from "react";
import SearchForm from "./SearchForm";
import CompanyCard from "./CompanyCard";
import JoblyApi from "../api.js";
import Toast from "./Toast";
import "./Toast.css";

function Companies() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function searchFunction(search) {
    let results = await JoblyApi.searchCompanies(search);
    if (results.length === 0) {
      new Toast({
        message: "Sorry, no matching companies found",
        type: "danger",
      });
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

  // if (isLoading) {
  //   return <p>Loading &hellip;</p>;
  // }

  return (
    <div>
      <SearchForm searchFunction={searchFunction} />
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
    </div>
  );
}

export default Companies;
