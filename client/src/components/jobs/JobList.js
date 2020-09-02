import React, { useContext, useEffect } from "react";
import Job from "../jobs/Job";
import { JobContext } from "../../providers/JobProvider";
import { useHistory } from "react-router-dom";

export default function JobList() {
  const { jobs, refreshJobs } = useContext(JobContext);
  const userProfile = JSON.parse(sessionStorage.getItem("userProfile"));
  const history = useHistory()

  useEffect(() => {
    if (userProfile.userTypeId == 1) {
      history.push("/managerView")
    }
    refreshJobs();
  }, []);

  return (
    <section>
      {jobs.map(j =>
        <Job key={j.id} job={j}/>
      )}
    </section>
  );
}