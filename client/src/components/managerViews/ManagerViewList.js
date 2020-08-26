import React, { useContext, useEffect } from "react";
import ManagerView from "../managerViews/ManagerView";
import { ManagerViewContext } from "../../providers/ManagerViewProvider";
import { JobContext } from "../../providers/JobProvider";


export default function ManagerViewList() {
  const { jobsManagerViews } = useContext(ManagerViewContext);
  const { jobs, refreshJobs } = useContext(JobContext);


  useEffect(() => {
    refreshJobs();
  }, []);

  return (
    <section>
      <h1>this is the manager view!</h1>
      {jobs.map(j =>
        <ManagerView key={j.id} job={j}/>
      )} 
    </section>
  );
}

