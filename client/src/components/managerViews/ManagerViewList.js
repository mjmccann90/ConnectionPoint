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
      {jobs.map(j =>
        <ManagerView key={j.id} job={j}/>
      )} 
    </section>
  );
}

