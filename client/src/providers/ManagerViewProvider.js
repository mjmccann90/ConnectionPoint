import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const ManagerViewContext = createContext();

export function ManagerViewProvider (props) {
  const apiUrl = "/api/managerView";
  const { getToken } = useContext(UserProfileContext);

  const [jobsManagerViews, setManagerViewJobs] = useState([]);

      const getManagerViewJob = (id) => {
        getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "managerView/json"
                },
            }).then((res) => res.json())
        );
    }


    
    const updateManagerViewJob = (managerView) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${managerView.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "managerView/json"
                },
                body: JSON.stringify(managerView)
            }));
    };

  return (
    <ManagerViewContext.Provider value={{ jobsManagerViews, getManagerViewJob, updateManagerViewJob }}>
      {props.children}
    </ManagerViewContext.Provider>
  );
}
