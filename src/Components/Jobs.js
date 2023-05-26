import React, { useEffect, useState } from "react";
import SearchForm from "./SearchForm";
import JobCard from "./JobCard";
import JoblyApi from "../api.js";
import Toast from "./Toast";
import "./Toast.css";
import { ActivityIndicator, StyleSheet, View } from "react-native";

function Jobs({ apply }) {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function searchFunction(search) {
    let results = await JoblyApi.searchJobs(search);
    if (results.length === 0) {
      new Toast({ message: "Sorry, no matching jobs found", type: "danger" });
    }
    setJobs(results);
    setIsLoading(false);
  }

  useEffect(() => {
    async function getAllJobs() {
      let jobs = await JoblyApi.getAllJobs();
      setJobs(jobs);
      setIsLoading(false);
    }
    getAllJobs();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
    },
    horizontal: {
      flexDirection: "row",
      justifyContent: "space-around",
      padding: 10,
    },
  });

  if (isLoading) {
    return (
      <div id="form-group-search">
        <View style={[styles.container, styles.horizontal]}>
          <ActivityIndicator size="large" color="#f1e7dd" />
        </View>
      </div>
    );
  }

  return (
    <div>
      <SearchForm searchFunction={searchFunction} />
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
