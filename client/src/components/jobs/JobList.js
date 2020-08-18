import React, { useContext, useEffect } from "react";
import Job from "../jobs/Job";
import { JobContext } from "../../providers/JobProvider";

export default function JobList() {
  const { jobs, refreshJobs } = useContext(JobContext);

  useEffect(() => {
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