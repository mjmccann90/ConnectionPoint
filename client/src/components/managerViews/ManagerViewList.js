import React, { useContext, useEffect } from "react";
import ManagerView from "./ManagerView";
import { ManagerViewContext } from "../../providers/ManagerViewProvider";

export default function ManagerViewList() {
  const { jobsManagerViews, managerViewRefreshJobs } = useContext(ManagerViewContext);

  useEffect(() => {
    managerViewRefreshJobs();
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

