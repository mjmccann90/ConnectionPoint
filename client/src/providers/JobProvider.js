import React, { useState, createContext, useContext } from "react";
import { UserProfileContext } from "./UserProfileProvider";

export const JobContext = createContext();

export function JobProvider (props) {
  const apiUrl = "/api/job";
  const { getToken } = useContext(UserProfileContext);

  const [jobs, setJobs] = useState([]);

  const refreshJobs = () =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      }).then(resp => resp.json())
        .then(setJobs));





  const addJob = (job) =>
    getToken().then((token) =>
      fetch(apiUrl, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(job)
      }).then(resp => {
        if (resp.ok) {
          return resp.json();
        }
        throw new Error("Unauthorized");
      }));



      const getJob = (id) => {
        getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
            }).then((res) => res.json())
        );
    }


    const deleteJob = (id) =>{
        return getToken().then((token) =>
            fetch(`${apiUrl}/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                }
            })
        );
    }
    const updateJob = (job) => {
        return getToken().then((token) =>
            fetch(`${apiUrl}/${job.id}`, {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(job)
            }));
    };

  return (
    <JobContext.Provider value={{ jobs, refreshJobs, addJob, getJob, deleteJob, updateJob }}>
      {props.children}
    </JobContext.Provider>
  );
}
