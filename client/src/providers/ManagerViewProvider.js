import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const ManagerViewContext = createContext();

export function ManagerViewProvider (props) {
  const apiUrl = "/api/managerView";
  const { getToken } = useContext(UserProfileContext);

  const [jobsManagerViews, setManagerViewJobs] = useState([]);

  const managerViewRefreshJobs = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setManagerViewJobs));





  const addManagerViewJob = (job) =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "managerView/json"
        },
        body: JSON.stringify(job)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      }));



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


    const deleteManagerViewJob = (id) =>{
        return getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "managerView/json"
                }
            })
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
    <ManagerViewContext.Provider value={{ jobsManagerViews, managerViewRefreshJobs, addManagerViewJob, getManagerViewJob, deleteManagerViewJob, updateManagerViewJob }}>
      {props.children}
    </ManagerViewContext.Provider>
  );
}
