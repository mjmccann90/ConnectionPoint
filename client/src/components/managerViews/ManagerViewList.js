import React, { useContext, useEffect } from "react";
import ManagerView from "./ManagerView";
import { ManagerViewContext } from "../../providers/ManagerViewProvider";
import { JobContext } from "../../providers/JobProvider";


export default function ManagerViewList() {
  const { jobsManagerViews } = useContext(ManagerViewContext);
  const { refreshJobs } = useContext(JobContext);


  useEffect(() => {
    refreshJobs();
  }, []);

  return (
    <div>
      <h1>this is the manager view!</h1>
      {/* {jobsManagerViews.map(j =>
        <ManagerView key={j.id} job={j}/>
      )} */}
    </div>
  );
}

